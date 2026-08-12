const cache = new Map<string, string>();
const FALLBACK = '#1a1a1a';

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  const rr = r / 255;
  const gg = g / 255;
  const bb = b / 255;
  const max = Math.max(rr, gg, bb);
  const min = Math.min(rr, gg, bb);
  const l = (max + min) / 2;
  if (max === min) {
    return [0, 0, l];
  }
  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  let h = 0;
  if (max === rr) {
    h = ((gg - bb) / d + (gg < bb ? 6 : 0)) / 6;
  } else if (max === gg) {
    h = ((bb - rr) / d + 2) / 6;
  } else {
    h = ((rr - gg) / d + 4) / 6;
  }
  return [h, s, l];
}

function hslToRgb(h: number, s: number, l: number): [number, number, number] {
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }
  const hue2rgb = (p: number, q: number, t: number) => {
    let tt = t;
    if (tt < 0) {
      tt += 1;
    }
    if (tt > 1) {
      tt -= 1;
    }
    if (tt < 1 / 6) {
      return p + (q - p) * 6 * tt;
    }
    if (tt < 1 / 2) {
      return q;
    }
    if (tt < 2 / 3) {
      return p + (q - p) * (2 / 3 - tt) * 6;
    }
    return p;
  };
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  return [
    Math.round(hue2rgb(p, q, h + 1 / 3) * 255),
    Math.round(hue2rgb(p, q, h) * 255),
    Math.round(hue2rgb(p, q, h - 1 / 3) * 255),
  ];
}

function hex(r: number, g: number, b: number): string {
  return `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
}

function tone(r: number, g: number, b: number): string {
  const [h, s] = rgbToHsl(r, g, b);
  const nextS = Math.min(0.58, Math.max(0.22, s * 1.08));
  const [rr, gg, bb] = hslToRgb(h, nextS, 0.18);
  return hex(rr, gg, bb);
}

export async function sampleWash(src: string): Promise<string> {
  const hit = cache.get(src);
  if (hit) {
    return hit;
  }
  try {
    const image = new Image();
    image.decoding = 'async';
    image.src = src;
    await image.decode();
    const size = 32;
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      return FALLBACK;
    }
    ctx.drawImage(image, 0, 0, size, size);
    const { data } = ctx.getImageData(0, 0, size, size);
    const buckets = Array.from({ length: 12 }, () => ({ r: 0, g: 0, b: 0, w: 0 }));
    for (let i = 0; i < data.length; i += 4) {
      if (data[i + 3] < 24) {
        continue;
      }
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const [h, s, l] = rgbToHsl(r, g, b);
      if (s < 0.12 || l < 0.08 || l > 0.92) {
        continue;
      }
      const index = Math.min(11, Math.floor(h * 12));
      const weight = s * (1 - Math.abs(l - 0.5) * 0.5);
      buckets[index].r += r * weight;
      buckets[index].g += g * weight;
      buckets[index].b += b * weight;
      buckets[index].w += weight;
    }
    const best = buckets.reduce((winner, bucket) => (bucket.w > winner.w ? bucket : winner));
    const color = best.w > 0 ? tone(best.r / best.w, best.g / best.w, best.b / best.w) : FALLBACK;
    cache.set(src, color);
    return color;
  } catch {
    cache.set(src, FALLBACK);
    return FALLBACK;
  }
}
