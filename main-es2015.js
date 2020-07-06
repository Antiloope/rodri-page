(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");



class AboutComponent {
    constructor() {
        this.texts = [
            ["About", "Sobre mi"],
            ["I was born in Córdoba, Argentina. Since childhood I like music and technology, and I took both passions hand in hand. At present, I'm studying last year of computer engineering and having listened a lot of music..",
                "Nací en Córdoba, Argentina. Desde chico me gustó siempre la música y la tecnología, y fui llevando ambas pasiones de la mano. Actualmente estoy cursando el ultimo año de ingeniería en computación y habiendo escuchado mucha musica.."],
        ];
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es') {
            this.langId = 1;
        }
        else {
            this.langId = 0;
        }
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 9, vars: 2, consts: [[1, "div-box"], [1, "about-container"], [1, "about-div"], [1, "about-text"], ["src", "assets/aboutImg.png", 1, "about-image-main"], ["src", "assets/aboutImg1.png", 1, "about-image-1"], ["src", "assets/aboutImg2.png", 1, "about-image-2"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.texts[0][ctx.langId], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.texts[1][ctx.langId]);
    } }, styles: [".about-container[_ngcontent-%COMP%] {\n  display: grid;\n  margin: 15px;\n}\n\n.about-div[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 0.3) 20%, rgba(16, 16, 16, 0.7) 80%, rgba(16, 16, 16, 0.9) 95%, #101010 100%);\n  grid-column: 1;\n  grid-row: 1/3;\n  width: 500px;\n  height: auto;\n  margin-left: auto;\n  margin-right: 2px;\n}\n\n.about-text[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-top: 50%;\n  margin-bottom: 10px;\n  margin-left: 15px;\n  margin-right: 15px;\n  max-height: 100%;\n  font-size: 14px;\n  font-weight: lighter;\n}\n\n.about-image-main[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1/3;\n  width: 500px;\n  height: auto;\n  margin-left: auto;\n  margin-right: 2px;\n  z-index: -1;\n}\n\n@media screen and (max-width: 480px) {\n  .about-text[_ngcontent-%COMP%] {\n    margin-top: 45%;\n    line-height: 14px;\n    font-size: 13px;\n    text-overflow: ellipsis;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .about-image-1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .about-image-2[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .about-image-main[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .about-div[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.about-image-1[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n  width: 179px;\n  height: auto;\n  margin-left: 5px;\n  margin-bottom: 3px;\n}\n\n.about-image-2[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 2;\n  margin-left: 5px;\n  margin-top: 3px;\n  width: 180px;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0Usd0pBQUE7RUFTQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BGOztBRFVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNQRjs7QURVQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ1BGOztBRFNBO0VBQ0U7SUFDRSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxlQUFBO0lBQ0EsdUJBQUE7RUNORjtBQUNGOztBRFFBO0VBQ0U7SUFDRSxhQUFBO0VDTkY7O0VEUUE7SUFDRSxhQUFBO0VDTEY7O0VET0E7SUFDRSxXQUFBO0VDSkY7O0VETUE7SUFDRSxXQUFBO0VDSEY7QUFDRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSkY7O0FET0E7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hYm91dC1jb250YWluZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmFib3V0LWRpdntcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgcmdiYSgxNiwxNiwxNiwgMC4wKSAwJSxcbiAgICAgIHJnYmEoMTYsMTYsMTYsIDAuMykgMjAlLFxuICAgICAgLy8gVGhlc2UgdGhyZWUgJ3Ntb290aCcgb3V0IHRoZSBmYWRlLlxuICAgICAgcmdiYSgxNiwxNiwxNiwgMC43KSA4MCUsXG4gICAgICByZ2JhKDE2LDE2LDE2LCAwLjkpIDk1JSxcbiAgICAgIC8vIFNvbGlkIHRvIG1hdGNoIHRoZSBiYWNrZ3JvdW5kLlxuICAgICAgcmdiYSgxNiwxNiwxNiwgMS4wKSAxMDAlXG4gICk7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMS8zO1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMnB4O1xufVxuXG4uYWJvdXQtdGV4dHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLXRvcDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xufVxuXG4uYWJvdXQtaW1hZ2UtbWFpbntcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxLzM7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHotaW5kZXg6IC0xO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmFib3V0LXRleHR7XG4gICAgbWFyZ2luLXRvcDogNDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFib3V0LWltYWdlLTEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFib3V0LWltYWdlLTIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmFib3V0LWltYWdlLW1haW57XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmFib3V0LWRpdntcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYWJvdXQtaW1hZ2UtMXtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAxO1xuICB3aWR0aDogMTc5cHg7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4uYWJvdXQtaW1hZ2UtMntcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAyO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBtYXJnaW4tdG9wOiAzcHg7XG4gIHdpZHRoOiAxODBweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuIiwiLmFib3V0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIG1hcmdpbjogMTVweDtcbn1cblxuLmFib3V0LWRpdiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE2LCAxNiwgMTYsIDApIDAlLCByZ2JhKDE2LCAxNiwgMTYsIDAuMykgMjAlLCByZ2JhKDE2LCAxNiwgMTYsIDAuNykgODAlLCByZ2JhKDE2LCAxNiwgMTYsIDAuOSkgOTUlLCAjMTAxMDEwIDEwMCUpO1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDEvMztcbiAgd2lkdGg6IDUwMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDJweDtcbn1cblxuLmFib3V0LXRleHQge1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xuICBtYXJnaW4tdG9wOiA1MCU7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5hYm91dC1pbWFnZS1tYWluIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxLzM7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYWJvdXQtdGV4dCB7XG4gICAgbWFyZ2luLXRvcDogNDUlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmFib3V0LWltYWdlLTEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuYWJvdXQtaW1hZ2UtMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5hYm91dC1pbWFnZS1tYWluIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5hYm91dC1kaXYge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4uYWJvdXQtaW1hZ2UtMSB7XG4gIGdyaWQtY29sdW1uOiAyO1xuICBncmlkLXJvdzogMTtcbiAgd2lkdGg6IDE3OXB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cblxuLmFib3V0LWltYWdlLTIge1xuICBncmlkLWNvbHVtbjogMjtcbiAgZ3JpZC1yb3c6IDI7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgd2lkdGg6IDE4MHB4O1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/album-view/album-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/album-view/album-view.component.ts ***!
  \****************************************************/
/*! exports provided: AlbumViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumViewComponent", function() { return AlbumViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AlbumViewComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const song_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/song/", song_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", song_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.name[ctx_r0.langId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](song_r1.duration[ctx_r0.langId]);
} }
class AlbumViewComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.texts = [
            ["Nothing to show here", "Nada para mostrar por aca"]
        ];
        this.songs = [];
        this.isOpen = false;
    }
    toggle() {
        document.querySelector('#album').style.top = window.pageYOffset + "px";
        if (this.isOpen) {
            document.body.style.overflow = "visible";
            setTimeout(() => {
                this.router.navigate(['/']);
            }, 400);
            setTimeout(() => {
                this.isOpen = false;
            }, 1);
        }
        else {
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                this.isOpen = true;
            }, 1);
        }
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es')
            this.langId = 1;
        else
            this.langId = 0;
        this.toggle();
        this.route.paramMap.subscribe(params => {
            this.currentAlbum = _global_content__WEBPACK_IMPORTED_MODULE_1__["albums"].find(album => album.id === +params.get('id'));
            this.songs = _global_content__WEBPACK_IMPORTED_MODULE_1__["songs"].filter(song => song.album === +this.currentAlbum.id);
        });
    }
}
AlbumViewComponent.ɵfac = function AlbumViewComponent_Factory(t) { return new (t || AlbumViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AlbumViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumViewComponent, selectors: [["app-album-view"]], decls: 17, vars: 7, consts: [["id", "album", 1, "div-box"], [1, "album-container"], ["mat-mini-fab", "", 1, "more-button"], [1, "more-icon"], ["mat-mini-fab", "", 1, "minimize-button", 3, "click"], [1, "album-title"], [1, "album-subtitle"], [1, "album-list"], [1, "song-holder"], [1, "no-songs"], ["class", "song-holder", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "song-holder", 3, "routerLink"], [1, "song-image", 3, "src"], [1, "song-name"], [1, "song-duration"]], template: function AlbumViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlbumViewComponent_Template_button_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AlbumViewComponent_li_16_Template, 6, 4, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentAlbum.title[ctx.langId].toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentAlbum.subtitle[ctx.langId].toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.songs.length ? "display:none" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.texts[0][ctx.langId]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.songs);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".div-box[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 10px;\n  width: 100%;\n  min-height: 100vh;\n  margin-top: 0;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.album-container[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -10px;\n  color: #FFFFFF;\n  background-color: var(--color-background);\n  height: 100vh;\n}\n\n.like-icon[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 10%;\n}\n\n.more-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n  margin-left: -9px;\n  margin-top: -10px;\n}\n\n.minimize-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2.5vh;\n  float: left;\n  margin-left: 2vmax;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.more-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2.5vh;\n  float: right;\n  margin-right: 2vmax;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.album-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 3vh;\n  font-size: 15px;\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.album-subtitle[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: lighter;\n  text-align: center;\n}\n\n.album-list[_ngcontent-%COMP%] {\n  margin: 1vw;\n  margin-top: 30px;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  list-style-type: none;\n}\n\n.song-holder[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.12);\n  cursor: pointer;\n}\n\n.song-holder[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50px 10px repeat(auto-fit, minmax(100px, 1fr));\n  font-weight: lighter;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: -16px;\n  border-bottom: 1px solid var(--color-secondary);\n}\n\n.song-image[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n  height: 50px;\n  width: 50px;\n}\n\n.no-songs[_ngcontent-%COMP%] {\n  grid-column: 1/5;\n  grid-row: 1;\n  height: auto;\n  margin-bottom: 15px;\n  margin-left: 14px;\n  margin-right: 24px;\n  padding-top: 14px;\n  text-align: center;\n  font-size: 15px;\n}\n\n.song-name[_ngcontent-%COMP%] {\n  grid-column: 2/5;\n  grid-row: 1;\n  height: auto;\n  margin-bottom: 1px;\n  margin-left: 14px;\n  padding-top: 14px;\n  text-align: left;\n  font-size: 14px;\n}\n\n.song-duration[_ngcontent-%COMP%] {\n  grid-column: 4/6;\n  grid-row: 1;\n  height: auto;\n  margin-right: 10px;\n  margin-bottom: 1px;\n  padding-top: 14px;\n  text-align: right;\n  color: var(--color-light);\n  font-size: 14px;\n}\n\n@media (max-width: 480px) {\n  .song-holder[_ngcontent-%COMP%] {\n    margin: 15px;\n    margin-left: 25px;\n    border-bottom: unset;\n  }\n\n  .song-duration[_ngcontent-%COMP%] {\n    grid-column: 2/5;\n    grid-row: 2;\n    padding-top: 0;\n    text-align: left;\n    margin-left: 5px;\n  }\n\n  .song-image[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1/3;\n    height: 45px;\n    width: 45px;\n  }\n\n  .song-name[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    padding-top: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9hbGJ1bS12aWV3L2FsYnVtLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FsYnVtLXZpZXcvYWxidW0tdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ09GOztBREpBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FDT0Y7O0FETEE7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7QUNRRjs7QUROQTtFQUNFLGFBQUE7RUFDQSxxRUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUNTRjs7QUROQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNTRjs7QURQQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1VGOztBRFJBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ1dGOztBRFRBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FDWUY7O0FEVkE7RUFDRTtJQUNFLFlBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0VDYUY7O0VEWEE7SUFDRSxnQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQ2NGOztFRFpBO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ2VGOztFRGJBO0lBQ0UsZ0JBQUE7SUFDQSxnQkFBQTtFQ2dCRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYWxidW0tdmlldy9hbGJ1bS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpdi1ib3h7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDowO1xuICByaWdodDowO1xuICB0b3A6MTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYWxidW0tY29udGFpbmVye1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubGlrZS1pY29ue1xuICBmbG9hdDpyaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ubW9yZS1pY29ue1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLm1pbmltaXplLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXZoO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDJ2bWF4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wKTtcbn1cbi5tb3JlLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXZoO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMnZtYXg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjApO1xufVxuLmFsYnVtLXRpdGxle1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogM3ZoO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWxidW0tc3VidGl0bGV7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsYnVtLWxpc3R7XG4gIG1hcmdpbjogMXZ3O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLnNvbmctaG9sZGVyOmhvdmVye1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMTIpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc29uZy1ob2xkZXJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMHB4IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LDFmcikpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAtMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5zb25nLWltYWdle1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG4ubm8tc29uZ3N7XG4gIGdyaWQtY29sdW1uOiAxLzU7XG4gIGdyaWQtcm93OiAxO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zb25nLW5hbWV7XG4gIGdyaWQtY29sdW1uOiAyLzU7XG4gIGdyaWQtcm93OiAxO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uc29uZy1kdXJhdGlvbntcbiAgZ3JpZC1jb2x1bW46IDQvNjtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5zb25nLWhvbGRlcntcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4gIH1cbiAgLnNvbmctZHVyYXRpb257XG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcbiAgICBncmlkLXJvdzogMjtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cbiAgLnNvbmctaW1hZ2V7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gIH1cbiAgLnNvbmctbmFtZXtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gIH1cbn1cbiIsIi5kaXYtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG5cbi5hbGJ1bS1jb250YWluZXIge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5saWtlLWljb24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuXG4ubW9yZS1pY29uIHtcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLm1pbmltaXplLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyLjV2aDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAydm1heDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4ubW9yZS1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMi41dmg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAydm1heDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4uYWxidW0tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogM3ZoO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbGJ1bS1zdWJ0aXRsZSB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmFsYnVtLWxpc3Qge1xuICBtYXJnaW46IDF2dztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNvbmctaG9sZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc29uZy1ob2xkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTBweCByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwgMWZyKSk7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IC0xNnB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnNvbmctaW1hZ2Uge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5uby1zb25ncyB7XG4gIGdyaWQtY29sdW1uOiAxLzU7XG4gIGdyaWQtcm93OiAxO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnNvbmctbmFtZSB7XG4gIGdyaWQtY29sdW1uOiAyLzU7XG4gIGdyaWQtcm93OiAxO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgbWFyZ2luLWxlZnQ6IDE0cHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zb25nLWR1cmF0aW9uIHtcbiAgZ3JpZC1jb2x1bW46IDQvNjtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHBhZGRpbmctdG9wOiAxNHB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNvbmctaG9sZGVyIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4gIH1cblxuICAuc29uZy1kdXJhdGlvbiB7XG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcbiAgICBncmlkLXJvdzogMjtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICAuc29uZy1pbWFnZSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gIH1cblxuICAuc29uZy1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gIH1cbn0iXX0= */"], data: { animation: _global_content__WEBPACK_IMPORTED_MODULE_1__["upDownAnimation"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-album-view',
                templateUrl: './album-view.component.html',
                styleUrls: ['./album-view.component.scss'],
                animations: _global_content__WEBPACK_IMPORTED_MODULE_1__["upDownAnimation"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/albums/albums.component.ts":
/*!********************************************!*\
  !*** ./src/app/albums/albums.component.ts ***!
  \********************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function AlbumsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const album_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/album/", album_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", album_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.title[ctx_r0.langId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](album_r1.subtitle[ctx_r0.langId]);
} }
const _c0 = function () { return ["owl-theme", "sliding"]; };
class AlbumsComponent {
    constructor() {
        this.texts = [
            ["Albums", "Albums"],
        ];
        this.mySlideOptions = {
            autoWidth: true,
            dots: false,
            nav: false,
            lazyLoad: true,
            margin: 20,
        };
        this._albums = _global_content__WEBPACK_IMPORTED_MODULE_1__["albums"];
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es') {
            this.langId = 1;
        }
        else {
            this.langId = 0;
        }
    }
}
AlbumsComponent.ɵfac = function AlbumsComponent_Factory(t) { return new (t || AlbumsComponent)(); };
AlbumsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlbumsComponent, selectors: [["app-albums"]], decls: 5, vars: 5, consts: [[1, "div-box"], [1, "album-carousel"], [3, "options", "carouselClasses"], ["class", "item", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "item", 3, "routerLink"], [1, "album-container-div"], [1, "album-image", 3, "src"], ["src", "assets/play.png", 1, "play-image"], [1, "album-title"], [1, "album-subtitle"]], template: function AlbumsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "owl-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlbumsComponent_div_4_Template, 8, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.texts[0][ctx.langId], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.mySlideOptions)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx._albums);
    } }, directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".album-carousel[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.album-container-div[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.album-container-div[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-top: 20px;\n}\n\n.play-image[_ngcontent-%COMP%]:hover {\n  z-index: 1;\n}\n\n.play-image[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  position: absolute;\n  margin-top: 55px;\n  z-index: -1;\n}\n\n.album-image[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n}\n\n.album-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n  margin-top: 5px;\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.album-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  font-weight: lighter;\n  color: var(--color-secondary);\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (min-width: 801px) {\n  .album-subtitle[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 180px;\n  }\n\n  .album-title[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 180px;\n  }\n\n  .album-container-div[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n\n  .album-image[_ngcontent-%COMP%] {\n    height: 180px;\n    width: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hbGJ1bXMvYWxidW1zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDR0Y7O0FEREE7RUFDRSxVQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDS0Y7O0FERkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQ0tGOztBREhBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNPRjs7QURMQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0VDUUY7O0VETkE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7RUNTRjs7RURQQTtJQUNFLFlBQUE7RUNVRjs7RURSQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VDV0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FsYnVtcy9hbGJ1bXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxidW0tY2Fyb3VzZWx7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uYWxidW0tY29udGFpbmVyLWRpdjpob3ZlcntcbiAgb3BhY2l0eTogMC41O1xufVxuLmFsYnVtLWNvbnRhaW5lci1kaXZ7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDoyMHB4O1xufVxuLnBsYXktaW1hZ2U6aG92ZXIge1xuICB6LWluZGV4OiAxO1xufVxuLnBsYXktaW1hZ2V7XG4gIGhlaWdodDogODBweDtcbiAgd2lkdGg6IDgwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNTVweDtcbiAgei1pbmRleDogLTE7XG59XG5cbi5hbGJ1bS1pbWFnZXtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLmFsYnVtLXRpdGxle1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG4uYWxidW0tc3VidGl0bGV7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MDFweCkge1xuICAuYWxidW0tc3VidGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5hbGJ1bS10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLmFsYnVtLWNvbnRhaW5lci1kaXYge1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICAuYWxidW0taW1hZ2Uge1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG59XG4iLCIuYWxidW0tY2Fyb3VzZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uYWxidW0tY29udGFpbmVyLWRpdjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmFsYnVtLWNvbnRhaW5lci1kaXYge1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5wbGF5LWltYWdlOmhvdmVyIHtcbiAgei1pbmRleDogMTtcbn1cblxuLnBsYXktaW1hZ2Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi10b3A6IDU1cHg7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4uYWxidW0taW1hZ2Uge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5hbGJ1bS10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLmFsYnVtLXN1YnRpdGxlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogODAxcHgpIHtcbiAgLmFsYnVtLXN1YnRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuXG4gIC5hbGJ1bS10aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cblxuICAuYWxidW0tY29udGFpbmVyLWRpdiB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgLmFsYnVtLWltYWdlIHtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlbumsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-albums',
                templateUrl: './albums.component.html',
                styleUrls: ['./albums.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _top_five_top_five_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./top-five/top-five.component */ "./src/app/top-five/top-five.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _albums_albums_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./albums/albums.component */ "./src/app/albums/albums.component.ts");
/* harmony import */ var _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./playlists/playlists.component */ "./src/app/playlists/playlists.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 0, consts: [[1, "content-grid"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-top-five");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-albums");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-playlists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _top_five_top_five_component__WEBPACK_IMPORTED_MODULE_2__["TopFiveComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"], _albums_albums_component__WEBPACK_IMPORTED_MODULE_4__["AlbumsComponent"], _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_5__["PlaylistsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"]], styles: [".content-grid[_ngcontent-%COMP%] {\n  display: grid;\n}\n\n@media (min-width: 800px) {\n  .content-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 500px 300px;\n    margin-right: auto;\n    margin-left: auto;\n    width: 800px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0Usa0NBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC1ncmlke1xuICBkaXNwbGF5OiBncmlkO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5jb250ZW50LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAwcHggMzAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufVxuXG4iLCIuY29udGVudC1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIC5jb250ZW50LWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAwcHggMzAwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHdpZHRoOiA4MDBweDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _top_five_top_five_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-five/top-five.component */ "./src/app/top-five/top-five.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _albums_albums_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./albums/albums.component */ "./src/app/albums/albums.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./playlists/playlists.component */ "./src/app/playlists/playlists.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _song_song_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./song/song.component */ "./src/app/song/song.component.ts");
/* harmony import */ var _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./album-view/album-view.component */ "./src/app/album-view/album-view.component.ts");
/* harmony import */ var _playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./playlist-view/playlist-view.component */ "./src/app/playlist-view/playlist-view.component.ts");




















const routes = [
    { path: 'song/:id', component: _song_song_component__WEBPACK_IMPORTED_MODULE_15__["SongComponent"] },
    { path: 'album/:id', component: _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_16__["AlbumViewComponent"] },
    { path: 'playlist/:id', component: _playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_17__["PlaylistViewComponent"] },
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes),
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _top_five_top_five_component__WEBPACK_IMPORTED_MODULE_8__["TopFiveComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
        _albums_albums_component__WEBPACK_IMPORTED_MODULE_10__["AlbumsComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
        _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistsComponent"],
        _song_song_component__WEBPACK_IMPORTED_MODULE_15__["SongComponent"],
        _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_16__["AlbumViewComponent"],
        _playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_17__["PlaylistViewComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _top_five_top_five_component__WEBPACK_IMPORTED_MODULE_8__["TopFiveComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                    _albums_albums_component__WEBPACK_IMPORTED_MODULE_10__["AlbumsComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"],
                    _playlists_playlists_component__WEBPACK_IMPORTED_MODULE_13__["PlaylistsComponent"],
                    _song_song_component__WEBPACK_IMPORTED_MODULE_15__["SongComponent"],
                    _album_view_album_view_component__WEBPACK_IMPORTED_MODULE_16__["AlbumViewComponent"],
                    _playlist_view_playlist_view_component__WEBPACK_IMPORTED_MODULE_17__["PlaylistViewComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_12__["OwlModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot(routes),
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ContactComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cont_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", cont_r1.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", cont_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cont_r1.name[ctx_r0.langId]);
} }
class ContactComponent {
    constructor() {
        this.texts = [
            ["Contact", "Contacto"],
        ];
        this.contact = [
            {
                image: "assets/email.png",
                name: ["Personal email", "Correo personal"],
                href: "mailto:rodrigopizarro1234@gmail.com",
            },
            {
                image: "assets/github.png",
                name: ["Github", "Github"],
                href: "https://github.com/Antiloope",
            },
            {
                image: "assets/linkedin.png",
                name: ["LinkedIn", "LinkedIn"],
                href: "https://www.linkedin.com/in/rodrigo-pizarro-bb7449125/",
            },
            {
                image: "assets/instagram.png",
                name: ["Instagram", "Instagram"],
                href: "https://www.instagram.com/rodri__pizarro/",
            },
        ];
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es') {
            this.langId = 1;
        }
        else {
            this.langId = 0;
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 4, vars: 2, consts: [[1, "title-div"], [1, "cont-list"], ["target", "_blank", "class", "cont-holder", 3, "href", 4, "ngFor", "ngForOf"], ["target", "_blank", 1, "cont-holder", 3, "href"], [1, "cont-image", 3, "src"], [1, "cont-name"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactComponent_a_3_Template, 4, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.texts[0][ctx.langId], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".title-div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 600px;\n  font-weight: bold;\n  margin-top: 35px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.cont-list[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 10px;\n  margin-left: 15px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  list-style-type: none;\n}\n\n.cont-holder[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.12);\n}\n\n.cont-holder[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px 1fr;\n  text-decoration: none;\n  font-weight: bold;\n  color: var(--color-text);\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: -16px;\n}\n\n.cont-image[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  border-radius: 60px;\n  padding: 4px;\n  padding-left: 7px;\n}\n\n.cont-name[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  padding-top: 1.1rem;\n  text-align: left;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7VUFBQSx5QkFBQTtFQUNBLHFCQUFBO0FDRUY7O0FEQUE7RUFDRSwyQ0FBQTtBQ0dGOztBRERBO0VBQ0UsYUFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FESEE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtZGl2e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG4uY29udC1saXN0e1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jb250LWhvbGRlcjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEyKTtcbn1cbi5jb250LWhvbGRlcntcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA2MHB4IDFmcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IC0xNnB4O1xufVxuLmNvbnQtaW1hZ2V7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgcGFkZGluZy1sZWZ0OiA3cHg7XG59XG4uY29udC1uYW1le1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgcGFkZGluZy10b3A6IDEuMXJlbTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuIiwiLnRpdGxlLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmNvbnQtbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uY29udC1ob2xkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xufVxuXG4uY29udC1ob2xkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMWZyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogLTE2cHg7XG59XG5cbi5jb250LWltYWdlIHtcbiAgaGVpZ2h0OiA1MHB4O1xuICB3aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNjBweDtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLWxlZnQ6IDdweDtcbn1cblxuLmNvbnQtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMS4xcmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXNpemU6IDE1cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/global-content.ts":
/*!***********************************!*\
  !*** ./src/app/global-content.ts ***!
  \***********************************/
/*! exports provided: upDownAnimation, playlists, albums, songs, lang */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upDownAnimation", function() { return upDownAnimation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playlists", function() { return playlists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "albums", function() { return albums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songs", function() { return songs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lang", function() { return lang; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const upDownAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('openClose', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(0%)',
            visibility: 'visible',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            transform: 'translateY(150%)',
        })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('open => closed', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])("0.4s cubic-bezier(0,0,.42,1.02)")
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('closed => open', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.4s cubic-bezier(0,0,.42,1.02)')
        ]),
    ]),
];
const playlists = [
    {
        id: 1,
        image: "assets/playlist1.png",
        title: ["Inspiration", "Inspiración"],
        subtitle: [" ", " "],
        embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/1RBh3VQ7qOKR40pGvpX21w\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },
    {
        id: 2,
        image: "assets/playlist5.png",
        title: ["Random", "Random"],
        subtitle: [" ", " "],
        embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/5EXv2Zvd8xElo5I13lPS9m\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },
    {
        id: 3,
        image: "assets/playlist2.png",
        title: ["Classicism", "Clasicismo"],
        subtitle: [" ", " "],
        embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/4ie5YFRRj3EZe8KtrSQOAj\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },
    {
        id: 4,
        image: "assets/playlist4.png",
        title: ["Epic!", "Épicos!"],
        subtitle: [" ", " "],
        embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/67zBNdyCco1g7atVFIRvzI\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },
    {
        id: 5,
        image: "assets/playlist3.png",
        title: ["Escena ARG", "Escena ARG"],
        subtitle: [" ", " "],
        embedded: "<iframe style=\"height: inherit;width: inherit\" src=\"https://open.spotify.com/embed/playlist/61wBaEIzq3PDu9Ep2AMxKA\" width=\"inherit\" height=\"inherit\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>",
    },
];
const albums = [
    {
        id: 1,
        image: "assets/studies.jpg",
        route: "album1",
        title: ["Studies", "Estudios"],
        subtitle: ["My formal education", "Mi educación formal"],
    },
    {
        id: 2,
        image: "assets/working.jpg",
        route: "album2",
        title: ["Work", "Trabajo"],
        subtitle: ["Working experiences", "Experiencias laborales"],
    },
    {
        id: 3,
        image: "assets/projects.jpg",
        route: "album3",
        title: ["Personal projects", "Proyectos personales"],
        subtitle: ["Ideas, prototypes...", "Ideas, prototipos..."],
    },
    {
        id: 4,
        image: "assets/art.png",
        route: "album4",
        title: ["Art", "Arte"],
        subtitle: ["Artistic expressions", "Expresiones artísticas"],
    },
    {
        id: 5,
        image: "assets/hobbies.jpg",
        route: "album5",
        title: ["Other hobbies", "Otros hobbies"],
        subtitle: ["Gaming, 3D printing...", "Juegos, impresion 3D..."],
    },
    {
        id: 6,
        image: "assets/recommendations.jpg",
        route: "album6",
        title: ["Recommendations", "Recomendaciones"],
        subtitle: ["Books, films, games...", "Libros, películas, juegos..."],
    },
];
const songs = [
    {
        id: 2,
        album: 2,
        name: ["Siges", "Siges"],
        image: "assets/siges.png",
        duration: ["2019 (July) - today", "2019 (Julio) - actualidad"],
        description: [
            "I work at <a href='https://www.linkedin.com/company/sistemasiges/about/' style='text-decoration: none;color: inherit' target='_blank'><b>SIGES SA</b></a>, a company that produce and manage its own integral management software for service stations. As developer in charge of integration projects of new technologies as Mercado Pago, YPF app and other projects in C# (.NET) and MSSQL.",
            "Trabajo en <a href='https://www.linkedin.com/company/sistemasiges/about/' style='text-decoration: none;color: inherit' target='_blank'><b>SIGES SA</b></a>, empresa que produce y administra un software propio para gestión integral de estaciones de servicio. Mi cargo es de desarrollador a cargo de proyectos de integración de nuevas tecnologias como Mercado Pago, APP de YPF y otros desarrollos en C# (.NET) y MSSQL."
        ],
    },
    {
        id: 3,
        album: 2,
        name: ["School support classes", "Clases de apoyo escolar"],
        image: "assets/school.png",
        duration: ["2018 - today", "2018 - actualidad"],
        description: [
            "I love education and for this reason I started teaching a group of students in 2018, helping them with subjects like electronics or mathematics. Over time, I met more students and managed to accommodate my schedules to continue giving private lessons, working and studying.",
            "Me encanta la educación y por eso empecé a dar clases en 2018 a varios alumnos, ayudandolos con materias de electrónica o matemáticas. Con el paso del tiempo, fui conociendo nuevos alumnos y acomodando mis horarios para poder dar clases, estudiar y trabajar."
        ],
    },
    {
        id: 4,
        album: 2,
        name: ["Internship in Pentacom", "Pasantía en Pentacom"],
        image: "assets/pentacom.png",
        duration: ["2016 (3 months)", "2016 (3 meses)"],
        description: [
            "In my last year at high school, I made a working internship at <a href='https://www.pentacom.com.ar/' style='text-decoration: none;color: inherit' target='_blank'><b>Pentacom</b></a>. A company that makes repairs of electronic devices, which allowed me to see how all technical contents studied in my school are applied in real life.",
            "En el último año del secundario, realicé una pasantia de trabajo en <a href='https://www.pentacom.com.ar/' style='text-decoration: none;color: inherit' target='_blank'><b>Pentacom</b></a>. Una empresa que realiza reparaciones de aparatos electrónicos, lo cual me permitió ver como se aplican en la realidad los contenidos técnicos vistos en el colegio."
        ],
    },
    {
        id: 5,
        album: 1,
        name: ["Computer Engineering", "Ingeniería en computación"],
        image: "assets/ucc.png",
        duration: ["2017 - today", "2017 - actualidad"],
        description: [
            "Since I entered technical oriented high school, I knew I was going to study any career related with electronics, and that's how years later, I chose <a href='https://www.ucc.edu.ar/facultades/ingenieria/' style='text-decoration: none;color: inherit' target='_blank'><b>computer engineering</b></a>. A degree that relates everything I like and fits perfectly with my abilities.",
            "Desde que entré al secundario técnico, ya sabía que iba a estudiar un carrera relacionada con la electrónica, y asi fue como años mas tarde, tomé la elección por <a href='https://www.ucc.edu.ar/facultades/ingenieria/' style='text-decoration: none;color: inherit' target='_blank'><b>ingeniería en computación</b></a>. Una carrera que relaciona todo lo que mas me gusta y encaja a la perfección con mis habilidades."
        ],
    },
    {
        id: 6,
        album: 1,
        name: ["High school", "Escuela secundaria"],
        image: "assets/highSchool.png",
        duration: ["2009 - 2016", "2009 - 2016"],
        description: [
            "I attended my secondary school at <a href='https://www.itsv.edu.ar/itsv/index.php' style='text-decoration: none;color: inherit' target='_blank'><b>Instituto Técnico Salesiano Villada</b></a>. A high school with technical orientation in 3 areas: informatics, electromechanics and electronics. In my fourth year, I make the decision to enter the speciality in electronics, where I learned most of the main concepts and tools that I deepened later in my career.",
            "Hice el secundario en el <a href='https://www.itsv.edu.ar/itsv/index.php' style='text-decoration: none;color: inherit' target='_blank'><b>Instituto Técnico Salesiano Villada</b></a>. Una escuela con orientación técnica en 3 areas: informática, electromecánica y electrónica. En cuarto año, tomé la desición de entrar a electrónica, donde aprendí gran parte de los conceptos y herraminetas que despues profundicé durante la carrera."
        ],
    },
    {
        id: 7,
        album: 1,
        name: ["Primary school", "Escuela primaria"],
        image: "assets/pias.png",
        duration: ["2004 - 2009", "2004 - 2009"],
        description: [
            "I did my primary school in <b>Escuelas Pías</b>, a catholic school with orientation in social sciences",
            "Mi escuela primaria la hice en <b>Escuelas Pías</b>, un colegio católico con orientación en ciencias sociales"
        ],
    },
    {
        id: 1,
        album: 3,
        name: ["ChordScript", "ChordScript"],
        image: "assets/cs.png",
        duration: ["2020", "2020"],
        description: [
            "<a href='https://github.com/Antiloope/ChordScript' style='text-decoration: none;color: inherit' target='_blank'><b>ChordScript</b></a> is my thesis project. A tool for music programming, based on 3 pillars: programming, music and education. If you are a musician interested in programming or a programmer interested in music, ChordScript is perfect for you",
            "<a href='https://github.com/Antiloope/ChordScript' style='text-decoration: none;color: inherit' target='_blank'><b>ChordScript</b></a> es mi proyecto de tesis. Una herramienta para programar música, centrada en 3 pilares: programación, música y educación. Si sos músico y te interesa la programación o sos programador y te interesa la música, ChordScript es la herramienta perfecta"
        ],
    },
];
const lang = navigator.language;


/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class HeaderComponent {
    constructor() {
        this.texts = [
            ["MONTHLY LISTENERS", "OYENTES MENSUALES"],
            ["FOLLOW", "SEGUIR"],
            ["FOLLOWING", "SIGUIENDO"],
        ];
        this.following = false;
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es') {
            this.langId = 1;
        }
        else {
            this.langId = 0;
        }
    }
    follow() {
        this.following = !this.following;
        if (this.following) {
            document.getElementById("follow").innerHTML = this.texts[2][this.langId];
            document.querySelector('.follow-button').style.color = "var(--color-primary)";
        }
        else {
            document.getElementById("follow").innerHTML = this.texts[1][this.langId];
            document.querySelector('.follow-button').style.color = "var(--color-text)";
        }
    }
    onScroll(event) {
        const verticalOffset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;
        if (verticalOffset <= 5) {
            document.querySelector('#image').style.backgroundImage =
                'linear-gradient(' +
                    '          rgba(16, 16, 16, 0.0) 0%,' +
                    '          rgba(16, 16, 16, 0.0) 60%,' +
                    '          rgba(16, 16, 16, 0.2) 80%,' +
                    '          rgba(16, 16, 16, 0.7) 90%,' +
                    '          rgba(16, 16, 16, 0.9) 95%,' +
                    '          rgba(16, 16, 16, 1.0) 100%' +
                    '      )';
        }
        else {
            document.querySelector('#image').style.backgroundImage =
                'linear-gradient(' +
                    '      rgba(16, 16, 16, 0.0) 0%,' +
                    '      rgba(16, 16, 16, 0.0) ' + (60 - verticalOffset / 4) + '%,' +
                    '      rgba(16, 16, 16, 0.2) ' + (80 - verticalOffset / 5) + '%,' +
                    '      rgba(16, 16, 16, 0.7) ' + (90 - verticalOffset / 6) + '%,' +
                    '      rgba(16, 16, 16, 0.9) ' + (95 - verticalOffset / 7) + '%,' +
                    '      rgba(16, 16, 16, 1.0) ' + (100 - verticalOffset / 8) + '%' +
                    '  )';
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], hostBindings: function HeaderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 14, vars: 2, consts: [["id", "image", 1, "background-image"], ["src", "assets/profile.png", 1, "profile-img"], [1, "title-div", 3, "scroll"], [1, "title-name"], [1, "monthly-span"], [1, "head-buttons-grid"], ["mat-flat-button", "", 1, "play-button"], [1, "button-text"], ["mat-flat-button", "", 1, "follow-button", 3, "click"], ["id", "follow", 1, "button-text"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_div_scroll_2_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Rodrigo Pizarro");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "PLAY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.follow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("10,000,000 ", ctx.texts[0][ctx.langId], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.texts[1][ctx.langId]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".profile-img[_ngcontent-%COMP%] {\n  width: auto;\n  max-width: 130%;\n  max-height: 400px;\n  position: relative;\n  margin-left: auto;\n  margin-right: auto;\n  display: block;\n  zoom: 110%;\n  z-index: -1;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-align: center;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: auto;\n  margin-left: auto;\n  background-image: linear-gradient(rgba(16, 16, 16, 0) 0%, rgba(16, 16, 16, 0) 60%, rgba(16, 16, 16, 0.2) 80%, rgba(16, 16, 16, 0.7) 90%, rgba(16, 16, 16, 0.9) 95%, #101010 100%);\n}\n\n.title-div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: -9rem;\n  max-width: 600px;\n}\n\n.follow-button[_ngcontent-%COMP%]:hover {\n  width: 123px;\n  height: 33px;\n  padding-top: 2px;\n  margin-left: 5px;\n  margin-top: -2px;\n  margin-bottom: -1px;\n}\n\n.follow-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 120px;\n  height: 30px;\n  display: block;\n  border: 1px solid;\n  border-color: #FFFFFF;\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  border-radius: 20px;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0.1);\n}\n\n.play-button[_ngcontent-%COMP%]:hover {\n  width: 113px;\n  height: 33px;\n  padding-top: 2px;\n  -webkit-filter: brightness(120%);\n          filter: brightness(120%);\n  margin-top: -2px;\n  margin-bottom: -1px;\n}\n\n.head-buttons-grid[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 260px;\n  position: sticky;\n  position: -webkit-sticky;\n  display: grid;\n  align-content: center;\n  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));\n}\n\n.button-text[_ngcontent-%COMP%] {\n  margin-top: -3px;\n}\n\n.play-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 110px;\n  height: 30px;\n  display: block;\n  border: 1px solid var(--color-primary);\n  font-size: 12px;\n  font-weight: bold;\n  letter-spacing: 2px;\n  border-radius: 20px;\n  color: var(--color-text);\n  background-color: var(--color-primary);\n}\n\n.title-name[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  margin-bottom: 10px;\n  text-align: center;\n  width: 300px;\n  display: block;\n  font-size: 35px;\n  font-max-size: 7vw;\n  font-weight: bold;\n}\n\n.monthly-span[_ngcontent-%COMP%] {\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n  font-size: 12px;\n  text-align: center;\n  color: var(--color-light);\n  margin-bottom: 10px;\n}\n\n.more-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n  margin-left: -9px;\n  margin-top: -10px;\n}\n\n.more-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n  margin-bottom: -50px;\n  float: right;\n  margin-right: 4vmax;\n  border-color: #FFFFFF;\n  border: 1px solid;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpTEFBQTtBQ0NGOztBRFdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1JGOztBRFdBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ1JGOztBRFVBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxvQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO1VBQUEsd0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUEY7O0FEVUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsMkRBQUE7QUNQRjs7QURTQTtFQUNFLGdCQUFBO0FDTkY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBQ0xGOztBRE9BO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSkY7O0FETUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURLQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNGRjs7QURJQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0NBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZmlsZS1pbWd7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXgtd2lkdGg6IDEzMCU7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB6b29tOiAxMTAlO1xuICB6LWluZGV4OiAtMTtcbn1cblxuLmJhY2tncm91bmQtaW1hZ2Uge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxuICAgICAgcmdiYSgxNiwgMTYsIDE2LCAwLjApIDAlLFxuICAgICAgcmdiYSgxNiwgMTYsIDE2LCAwLjApIDYwJSxcbiAgICAgIC8vIFRoZXNlIHRocmVlICdzbW9vdGgnIG91dCB0aGUgZmFkZS5cbiAgICAgIHJnYmEoMTYsIDE2LCAxNiwgMC4yKSA4MCUsXG4gICAgICByZ2JhKDE2LCAxNiwgMTYsIDAuNykgOTAlLFxuICAgICAgcmdiYSgxNiwgMTYsIDE2LCAwLjkpIDk1JSxcbiAgICAgIC8vIFNvbGlkIHRvIG1hdGNoIHRoZSBiYWNrZ3JvdW5kLlxuICAgICAgcmdiYSgxNiwgMTYsIDE2LCAxLjApIDEwMCVcbiAgKTtcbn1cblxuLnRpdGxlLWRpdntcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAtOXJlbTtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbn1cblxuLmZvbGxvdy1idXR0b246aG92ZXIge1xuICB3aWR0aDogMTIzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cbi5mb2xsb3ctYnV0dG9ue1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTIwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xufVxuXG4ucGxheS1idXR0b246aG92ZXIge1xuICB3aWR0aDogMTEzcHg7XG4gIGhlaWdodDogMzNweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEyMCUpO1xuICBtYXJnaW4tdG9wOiAtMnB4O1xuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xufVxuXG4uaGVhZC1idXR0b25zLWdyaWR7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogMjYwcHg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEzMHB4LCAxZnIpKTtcbn1cbi5idXR0b24tdGV4dHtcbiAgbWFyZ2luLXRvcDogLTNweDtcbn1cbi5wbGF5LWJ1dHRvbntcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDExMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbn1cbi50aXRsZS1uYW1le1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAzMDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC1tYXgtc2l6ZTogN3Z3O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tb250aGx5LXNwYW57XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHdpZHRoOiAzMDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubW9yZS1pY29ue1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLm1vcmUtYnV0dG9ue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA0dm1heDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMyk7XG59XG4iLCIucHJvZmlsZS1pbWcge1xuICB3aWR0aDogYXV0bztcbiAgbWF4LXdpZHRoOiAxMzAlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgem9vbTogMTEwJTtcbiAgei1pbmRleDogLTE7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDE2LCAxNiwgMTYsIDApIDAlLCByZ2JhKDE2LCAxNiwgMTYsIDApIDYwJSwgcmdiYSgxNiwgMTYsIDE2LCAwLjIpIDgwJSwgcmdiYSgxNiwgMTYsIDE2LCAwLjcpIDkwJSwgcmdiYSgxNiwgMTYsIDE2LCAwLjkpIDk1JSwgIzEwMTAxMCAxMDAlKTtcbn1cblxuLnRpdGxlLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogLTlyZW07XG4gIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5mb2xsb3ctYnV0dG9uOmhvdmVyIHtcbiAgd2lkdGg6IDEyM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIG1hcmdpbi10b3A6IC0ycHg7XG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XG59XG5cbi5mb2xsb3ctYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDEyMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXI6IDFweCBzb2xpZDtcbiAgYm9yZGVyLWNvbG9yOiAjRkZGRkZGO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnBsYXktYnV0dG9uOmhvdmVyIHtcbiAgd2lkdGg6IDExM3B4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG4gIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcbiAgbWFyZ2luLXRvcDogLTJweDtcbiAgbWFyZ2luLWJvdHRvbTogLTFweDtcbn1cblxuLmhlYWQtYnV0dG9ucy1ncmlkIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiAyNjBweDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgcG9zaXRpb246IC13ZWJraXQtc3RpY2t5O1xuICBkaXNwbGF5OiBncmlkO1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTMwcHgsIDFmcikpO1xufVxuXG4uYnV0dG9uLXRleHQge1xuICBtYXJnaW4tdG9wOiAtM3B4O1xufVxuXG4ucGxheS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICB3aWR0aDogMTEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xufVxuXG4udGl0bGUtbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDMwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAzNXB4O1xuICBmb250LW1heC1zaXplOiA3dnc7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ubW9udGhseS1zcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDMwMHB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1vcmUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTlweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAtNTBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDR2bWF4O1xuICBib3JkZXItY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ["window:scroll", ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/playlist-view/playlist-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/playlist-view/playlist-view.component.ts ***!
  \**********************************************************/
/*! exports provided: PlaylistViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistViewComponent", function() { return PlaylistViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class PlaylistViewComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.texts = [];
        this.isOpen = false;
    }
    toggle() {
        document.querySelector('#album').style.top = window.pageYOffset + "px";
        if (this.isOpen) {
            document.body.style.overflow = "visible";
            setTimeout(() => {
                this.router.navigate(['/']);
            }, 400);
            setTimeout(() => {
                this.isOpen = false;
            }, 1);
        }
        else {
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                this.isOpen = true;
            }, 1);
        }
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es')
            this.langId = 1;
        else
            this.langId = 0;
        this.toggle();
        this.route.paramMap.subscribe(params => {
            this.currentPlaylist = _global_content__WEBPACK_IMPORTED_MODULE_1__["playlists"].find(play => play.id === +params.get('id'));
            document.getElementById('playlist-div').innerHTML = this.currentPlaylist.embedded;
        });
    }
}
PlaylistViewComponent.ɵfac = function PlaylistViewComponent_Factory(t) { return new (t || PlaylistViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
PlaylistViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistViewComponent, selectors: [["app-playlist-view"]], decls: 13, vars: 3, consts: [["id", "album", 1, "div-box"], [1, "album-container"], ["mat-mini-fab", "", 1, "more-button"], [1, "more-icon"], ["mat-mini-fab", "", 1, "minimize-button", 3, "click"], [1, "album-title"], [1, "album-subtitle"], ["id", "playlist-div"]], template: function PlaylistViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlaylistViewComponent_Template_button_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentPlaylist.title[ctx.langId].toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentPlaylist.subtitle[ctx.langId].toUpperCase());
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: [".div-box[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 10px;\n  width: 100%;\n  min-height: 100vh;\n  margin-top: 0;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.album-container[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -10px;\n  color: #FFFFFF;\n  background-color: var(--color-background);\n  height: 100vh;\n}\n\n.like-icon[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 10%;\n}\n\n.more-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n  margin-left: -9px;\n  margin-top: -10px;\n}\n\n.minimize-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2.5vh;\n  float: left;\n  margin-left: 2vmax;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.more-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2.5vh;\n  float: right;\n  margin-right: 2vmax;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.album-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 4vh;\n  font-size: 15px;\n  font-weight: bold;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.album-subtitle[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: lighter;\n  text-align: center;\n}\n\n.album-list[_ngcontent-%COMP%] {\n  margin: 1vw;\n  margin-top: 30px;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  list-style-type: none;\n}\n\n.song-holder[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.12);\n  cursor: pointer;\n}\n\n.song-holder[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50px 10px repeat(auto-fit, minmax(100px, 1fr));\n  font-weight: lighter;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: -16px;\n  border-bottom: 1px solid var(--color-secondary);\n}\n\n.song-image[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n  height: 50px;\n  width: 50px;\n}\n\n.song-name[_ngcontent-%COMP%] {\n  grid-column: 2/5;\n  grid-row: 1;\n  height: auto;\n  margin-bottom: 1px;\n  margin-left: 14px;\n  padding-top: 14px;\n  text-align: left;\n  font-size: 14px;\n}\n\n.song-duration[_ngcontent-%COMP%] {\n  grid-column: 4/6;\n  grid-row: 1;\n  height: auto;\n  margin-right: 10px;\n  margin-bottom: 1px;\n  padding-top: 14px;\n  text-align: right;\n  color: var(--color-light);\n  font-size: 14px;\n}\n\n#playlist-div[_ngcontent-%COMP%] {\n  height: 80vh;\n  width: 80vw;\n  margin-top: 30px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (max-width: 480px) {\n  .song-holder[_ngcontent-%COMP%] {\n    margin: 15px;\n    margin-left: 25px;\n    border-bottom: unset;\n  }\n\n  .song-duration[_ngcontent-%COMP%] {\n    grid-column: 2/5;\n    grid-row: 2;\n    padding-top: 0;\n    text-align: left;\n    margin-left: 5px;\n  }\n\n  .song-image[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1/3;\n    height: 45px;\n    width: 45px;\n  }\n\n  .song-name[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    padding-top: 2px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9wbGF5bGlzdC12aWV3L3BsYXlsaXN0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BsYXlsaXN0LXZpZXcvcGxheWxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ09GOztBREpBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHFCQUFBO0FDT0Y7O0FETEE7RUFDRSwyQ0FBQTtFQUNBLGVBQUE7QUNRRjs7QUROQTtFQUNFLGFBQUE7RUFDQSxxRUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0NBQUE7QUNTRjs7QUROQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNTRjs7QURQQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNVRjs7QURSQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQ1dGOztBRFJBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNXRjs7QURSQTtFQUNFO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7RUNXRjs7RURUQTtJQUNFLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VDWUY7O0VEVkE7SUFDRSxjQUFBO0lBQ0EsYUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDYUY7O0VEWEE7SUFDRSxnQkFBQTtJQUNBLGdCQUFBO0VDY0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0LXZpZXcvcGxheWxpc3Qtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtYm94e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6MDtcbiAgcmlnaHQ6MDtcbiAgdG9wOjEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cblxuLmFsYnVtLWNvbnRhaW5lcntcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAtMTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuLmxpa2UtaWNvbntcbiAgZmxvYXQ6cmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xufVxuLm1vcmUtaWNvbntcbiAgZm9udC1zaXplOiAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAtOXB4O1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cbi5taW5pbWl6ZS1idXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyLjV2aDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIG1hcmdpbi1sZWZ0OiAydm1heDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMCk7XG59XG4ubW9yZS1idXR0b257XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyLjV2aDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDJ2bWF4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wKTtcbn1cbi5hbGJ1bS10aXRsZXtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDR2aDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmFsYnVtLXN1YnRpdGxle1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbGJ1bS1saXN0e1xuICBtYXJnaW46IDF2dztcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5zb25nLWhvbGRlcjpob3ZlcntcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnNvbmctaG9sZGVye1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTBweCByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwxZnIpKTtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogLTE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uc29uZy1pbWFnZXtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuLnNvbmctbmFtZXtcbiAgZ3JpZC1jb2x1bW46IDIvNTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zb25nLWR1cmF0aW9ue1xuICBncmlkLWNvbHVtbjogNC82O1xuICBncmlkLXJvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNwbGF5bGlzdC1kaXZ7XG4gIGhlaWdodDogODB2aDtcbiAgd2lkdGg6IDgwdnc7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc29uZy1ob2xkZXJ7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xuICB9XG4gIC5zb25nLWR1cmF0aW9ue1xuICAgIGdyaWQtY29sdW1uOiAyLzU7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICB9XG4gIC5zb25nLWltYWdle1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICB9XG4gIC5zb25nLW5hbWV7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICB9XG59XG4iLCIuZGl2LWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICBtYXJnaW4tdG9wOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xufVxuXG4uYWxidW0tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAtMTBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJhY2tncm91bmQpO1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4ubGlrZS1pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDEwJTtcbn1cblxuLm1vcmUtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tbGVmdDogLTlweDtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG59XG5cbi5taW5pbWl6ZS1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMi41dmg7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMnZtYXg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLm1vcmUtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXZoO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMnZtYXg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuLmFsYnVtLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDR2aDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxidW0tc3VidGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hbGJ1bS1saXN0IHtcbiAgbWFyZ2luOiAxdnc7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zb25nLWhvbGRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNvbmctaG9sZGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MHB4IDEwcHggcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsIDFmcikpO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAtMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG59XG5cbi5zb25nLWltYWdlIHtcbiAgZ3JpZC1jb2x1bW46IDE7XG4gIGdyaWQtcm93OiAxO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xufVxuXG4uc29uZy1uYW1lIHtcbiAgZ3JpZC1jb2x1bW46IDIvNTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xuICBtYXJnaW4tbGVmdDogMTRweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNvbmctZHVyYXRpb24ge1xuICBncmlkLWNvbHVtbjogNC82O1xuICBncmlkLXJvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNwbGF5bGlzdC1kaXYge1xuICBoZWlnaHQ6IDgwdmg7XG4gIHdpZHRoOiA4MHZ3O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnNvbmctaG9sZGVyIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4gIH1cblxuICAuc29uZy1kdXJhdGlvbiB7XG4gICAgZ3JpZC1jb2x1bW46IDIvNTtcbiAgICBncmlkLXJvdzogMjtcbiAgICBwYWRkaW5nLXRvcDogMDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIH1cblxuICAuc29uZy1pbWFnZSB7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gIH1cblxuICAuc29uZy1uYW1lIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHBhZGRpbmctdG9wOiAycHg7XG4gIH1cbn0iXX0= */"], data: { animation: _global_content__WEBPACK_IMPORTED_MODULE_1__["upDownAnimation"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlist-view',
                templateUrl: './playlist-view.component.html',
                styleUrls: ['./playlist-view.component.scss'],
                animations: _global_content__WEBPACK_IMPORTED_MODULE_1__["upDownAnimation"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/playlists/playlists.component.ts":
/*!**************************************************!*\
  !*** ./src/app/playlists/playlists.component.ts ***!
  \**************************************************/
/*! exports provided: PlaylistsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaylistsComponent", function() { return PlaylistsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function PlaylistsComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const playlist_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/playlist/", playlist_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", playlist_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r1.title[ctx_r0.langId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](playlist_r1.subtitle[ctx_r0.langId]);
} }
const _c0 = function () { return ["owl-theme", "sliding"]; };
class PlaylistsComponent {
    constructor() {
        this.texts = [
            ["Playlists", "Playlists"],
        ];
        this.mySlideOptions = {
            autoWidth: true,
            dots: false,
            nav: false,
            lazyLoad: true,
            margin: 20,
        };
        this.playlists = _global_content__WEBPACK_IMPORTED_MODULE_1__["playlists"];
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es') {
            this.langId = 1;
        }
        else {
            this.langId = 0;
        }
    }
}
PlaylistsComponent.ɵfac = function PlaylistsComponent_Factory(t) { return new (t || PlaylistsComponent)(); };
PlaylistsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlaylistsComponent, selectors: [["app-playlists"]], decls: 5, vars: 5, consts: [[1, "div-box"], [1, "playlist-carousel"], [3, "options", "carouselClasses"], ["class", "item", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "item", 3, "routerLink"], [1, "playlist-container-div"], [1, "playlist-image", 3, "src"], [1, "playlist-title"], [1, "playlist-subtitle"]], template: function PlaylistsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "owl-carousel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlaylistsComponent_div_4_Template, 7, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.texts[0][ctx.langId], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.mySlideOptions)("carouselClasses", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.playlists);
    } }, directives: [ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_2__["OwlCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"]], styles: [".playlist-image[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n}\n\n.playlist-container-div[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.playlist-container-div[_ngcontent-%COMP%] {\n  width: 150px;\n  margin-top: 20px;\n}\n\n.playlist-carousel[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  margin-right: 20px;\n}\n\n.playlist-title[_ngcontent-%COMP%] {\n  font-size: 13px;\n  text-align: center;\n  margin-top: 5px;\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.playlist-subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  font-weight: lighter;\n  color: var(--color-secondary);\n  width: 150px;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n@media (min-width: 801px) {\n  .playlist-subtitle[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 180px;\n  }\n\n  .playlist-title[_ngcontent-%COMP%] {\n    text-align: left;\n    width: 180px;\n  }\n\n  .playlist-container-div[_ngcontent-%COMP%] {\n    width: 180px;\n  }\n\n  .playlist-image[_ngcontent-%COMP%] {\n    height: 180px;\n    width: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wbGF5bGlzdHMvcGxheWxpc3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7QUNFRjs7QURBQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBRERBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFO0lBQ0UsZ0JBQUE7SUFDQSxZQUFBO0VDTUY7O0VESkE7SUFDRSxnQkFBQTtJQUNBLFlBQUE7RUNPRjs7RURMQTtJQUNFLFlBQUE7RUNRRjs7RUROQTtJQUNFLGFBQUE7SUFDQSxZQUFBO0VDU0Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BsYXlsaXN0cy9wbGF5bGlzdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxheWxpc3QtaW1hZ2V7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cbi5wbGF5bGlzdC1jb250YWluZXItZGl2OmhvdmVye1xuICBvcGFjaXR5OiAwLjU7XG59XG4ucGxheWxpc3QtY29udGFpbmVyLWRpdiB7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLXRvcDoyMHB4O1xufVxuLnBsYXlsaXN0LWNhcm91c2Vse1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucGxheWxpc3QtdGl0bGV7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi5wbGF5bGlzdC1zdWJ0aXRsZXtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBjb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gIC5wbGF5bGlzdC1zdWJ0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbiAgLnBsYXlsaXN0LXRpdGxlIHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuICAucGxheWxpc3QtY29udGFpbmVyLWRpdiB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG4gIC5wbGF5bGlzdC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbn1cbiIsIi5wbGF5bGlzdC1pbWFnZSB7XG4gIGhlaWdodDogMTUwcHg7XG4gIHdpZHRoOiAxNTBweDtcbn1cblxuLnBsYXlsaXN0LWNvbnRhaW5lci1kaXY6aG92ZXIge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5wbGF5bGlzdC1jb250YWluZXItZGl2IHtcbiAgd2lkdGg6IDE1MHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ucGxheWxpc3QtY2Fyb3VzZWwge1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucGxheWxpc3QtdGl0bGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICB3aWR0aDogMTUwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG59XG5cbi5wbGF5bGlzdC1zdWJ0aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXNlY29uZGFyeSk7XG4gIHdpZHRoOiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDgwMXB4KSB7XG4gIC5wbGF5bGlzdC1zdWJ0aXRsZSB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cblxuICAucGxheWxpc3QtdGl0bGUge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG5cbiAgLnBsYXlsaXN0LWNvbnRhaW5lci1kaXYge1xuICAgIHdpZHRoOiAxODBweDtcbiAgfVxuXG4gIC5wbGF5bGlzdC1pbWFnZSB7XG4gICAgaGVpZ2h0OiAxODBweDtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlaylistsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-playlists',
                templateUrl: './playlists.component.html',
                styleUrls: ['./playlists.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/song/song.component.ts":
/*!****************************************!*\
  !*** ./src/app/song/song.component.ts ***!
  \****************************************/
/*! exports provided: SongComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SongComponent", function() { return SongComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");







class SongComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.isOpen = false;
        this.isPlaying = false;
        this.nextSong = 0;
        this.texts = [];
        this.cursor = 0;
        this.newCursor = 0;
    }
    toggle() {
        document.querySelector('#song').style.top = window.pageYOffset + "px";
        if (this.isOpen) {
            document.body.style.overflow = "visible";
            if (this.nextSong) {
                setTimeout(() => {
                    this.router.navigate(['/song/' + this.nextSong]);
                }, 401);
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 400);
            }
            else {
                setTimeout(() => {
                    this.router.navigate(['/']);
                }, 400);
            }
            setTimeout(() => {
                this.isOpen = false;
            }, 1);
        }
        else {
            document.body.style.overflow = "hidden";
            setTimeout(() => {
                this.isOpen = true;
            }, 1);
        }
    }
    setCursor(range) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isPlaying = false;
            this.newCursor = range.value;
            this.cursor = range.value;
            document.getElementById('myRange').style.background = 'linear-gradient(to right, var(--color-text) calc(' + range.value + '*1%), var(--color-secondary) 0)';
        });
    }
    goBack() {
        let tmp = _global_content__WEBPACK_IMPORTED_MODULE_2__["songs"].find(song => song.album === this.currentSong.album && song.id === this.currentSong.id - 1);
        if (tmp)
            this.nextSong = tmp.id;
        else
            this.nextSong = 1;
        this.isPlaying = false;
        this.toggle();
    }
    goNext() {
        let tmp = _global_content__WEBPACK_IMPORTED_MODULE_2__["songs"].find(song => song.album === this.currentSong.album && song.id === this.currentSong.id + 1);
        if (tmp)
            this.nextSong = tmp.id;
        else
            this.nextSong = Math.floor(Math.random() * _global_content__WEBPACK_IMPORTED_MODULE_2__["songs"].length) + 1;
        this.isPlaying = false;
        this.toggle();
    }
    startPlaying(range) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isPlaying = !this.isPlaying;
            range.value = this.cursor;
            let rangeElement = document.getElementById('myRange');
            while (this.isPlaying && this.isOpen) {
                if (this.newCursor) {
                    this.cursor = this.newCursor;
                    this.newCursor = 0;
                }
                this.cursor = +this.cursor + 0.3;
                rangeElement.style.background = 'linear-gradient(to right, var(--color-text) calc(' + range.value + '*1%), var(--color-secondary) 0)';
                range.value = this.cursor;
                yield new Promise(r => setTimeout(r, 50));
                if (this.cursor >= 100) {
                    let tmp = _global_content__WEBPACK_IMPORTED_MODULE_2__["songs"].find(song => song.album === this.currentSong.album && song.id === this.currentSong.id + 1);
                    if (tmp)
                        this.nextSong = tmp.id;
                    else
                        this.nextSong = this.nextSong = Math.floor(Math.random() * _global_content__WEBPACK_IMPORTED_MODULE_2__["songs"].length) + 1;
                    this.isPlaying = false;
                    this.toggle();
                }
            }
        });
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_2__["lang"].split('-')[0] === 'es')
            this.langId = 1;
        else
            this.langId = 0;
        this.toggle();
        this.route.paramMap.subscribe(params => {
            this.currentSong = _global_content__WEBPACK_IMPORTED_MODULE_2__["songs"].find(exp => exp.id === +params.get('id'));
            this.currentSong.al = _global_content__WEBPACK_IMPORTED_MODULE_2__["albums"].find(al => al.id === this.currentSong.album);
            document.getElementById('description').innerHTML = this.currentSong.description[this.langId];
        });
    }
}
SongComponent.ɵfac = function SongComponent_Factory(t) { return new (t || SongComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
SongComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SongComponent, selectors: [["app-song"]], decls: 39, vars: 9, consts: [["id", "song", 1, "div-box"], [1, "song-container"], ["mat-mini-fab", "", 1, "more-button"], [1, "more-icon"], ["mat-mini-fab", "", 1, "minimize-button", 3, "click"], [1, "song-title"], [1, "album-title"], [1, "description-container"], ["id", "description", 1, "description"], [1, "background-image", 3, "src"], [1, "song-footer"], [1, "like-icon", "far", "fa-heart", "fa-lg"], [1, "footer-song-title"], [1, "footer-song-artist"], [1, "footer-duration-left"], [1, "footer-duration-right"], ["type", "range", "min", "1", "max", "100", "step", "0.3", "id", "myRange", 1, "slider", 3, "value", "change"], ["myRange", ""], [1, "icons"], [1, "icon"], [1, "fas", "fa-random", "fa-lg"], [1, "icon", 3, "click"], [1, "fas", "fa-step-backward", "fa-2x"], [2, "font-size", "5em", "margin-left", "-3vmin", "margin-right", "-3vmin", "display", "inline"], [1, "fas", "fa-step-forward", "fa-2x"], [1, "fas", "fa-retweet", "fa-lg"]], template: function SongComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "share");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SongComponent_Template_button_click_5_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "expand_more");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Rodrigo Pizarro");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function SongComponent_Template_input_change_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return ctx.setCursor(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SongComponent_Template_button_click_30_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SongComponent_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](26); return ctx.startPlaying(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SongComponent_Template_button_click_35_listener() { return ctx.goNext(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@openClose", ctx.isOpen ? "open" : "closed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentSong.name[ctx.langId].toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentSong.al.title[ctx.langId].toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.currentSong.al.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentSong.name[ctx.langId]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentSong.duration[ctx.langId].split("-")[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentSong.duration[ctx.langId].split("-")[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("value", ctx.cursor);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.isPlaying ? "pause_circle_filled" : "play_circle_filled");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"]], styles: [".div-box[_ngcontent-%COMP%] {\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  top: 10px;\n  width: 100%;\n  min-height: 100vh;\n  margin-top: 0;\n  overflow: hidden;\n  z-index: 1;\n}\n\n.song-container[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: -10px;\n  color: #FFFFFF;\n  background-color: var(--color-background);\n  height: 100vh;\n}\n\n.like-icon[_ngcontent-%COMP%] {\n  float: right;\n  margin-right: 10%;\n}\n\n.more-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  text-align: center;\n  margin-left: -9px;\n  margin-top: -10px;\n}\n\n.minimize-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2.5vh;\n  float: left;\n  margin-left: 2vmax;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.more-button[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2.5vh;\n  float: right;\n  margin-right: 2vmax;\n  color: var(--color-text);\n  background-color: rgba(0, 0, 0, 0);\n}\n\n.song-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 3vh;\n  font-size: 15px;\n  font-weight: lighter;\n  margin-bottom: 0;\n  text-align: center;\n}\n\n.album-title[_ngcontent-%COMP%] {\n  margin-top: 0;\n  padding-top: 4px;\n  font-size: 14px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.background-image[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  margin-bottom: auto;\n  margin-right: auto;\n  height: 80vmin;\n  width: 80vmin;\n  max-width: 50vh;\n  max-height: 50vh;\n}\n\n.description[_ngcontent-%COMP%] {\n  text-align: justify;\n  position: absolute;\n  font-weight: normal;\n  width: 70vmin;\n  max-width: 45vh;\n  text-overflow: clip;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: inherit;\n  font-size: 92%;\n  left: 0;\n  right: 0;\n  z-index: 2;\n}\n\n.description-container[_ngcontent-%COMP%] {\n  margin-top: 8vh;\n  vertical-align: middle;\n}\n\n.song-footer[_ngcontent-%COMP%] {\n  margin-top: 6vh;\n  position: fixed;\n  height: auto;\n  margin-right: 0;\n  margin-left: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n}\n\n.footer-song-title[_ngcontent-%COMP%] {\n  text-align: left;\n  margin-left: 10%;\n}\n\n.footer-song-artist[_ngcontent-%COMP%] {\n  text-align: left;\n  font-weight: lighter;\n  font-size: 13px;\n  margin-left: 10%;\n}\n\n.slider[_ngcontent-%COMP%] {\n  margin-top: 2vh;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  width: 80%;\n  right: 100px;\n  height: 5px;\n  outline: none;\n  background-color: var(--color-secondary);\n  transition: opacity 0.2s;\n  border-radius: 100px;\n  background: linear-gradient(to right, var(--color-text) calc(0*1%), var(--color-secondary) 0);\n}\n\n.slider[_ngcontent-%COMP%]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  appearance: none;\n  width: 10px;\n  height: 10px;\n  border-radius: 100px;\n  background: var(--color-text);\n  cursor: pointer;\n}\n\n.slider[_ngcontent-%COMP%]::-moz-range-thumb {\n  width: 10px;\n  height: 10px;\n  border-radius: 100px;\n  background: var(--color-text);\n  cursor: pointer;\n}\n\n.icons[_ngcontent-%COMP%] {\n  margin-top: 4vh;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.icon[_ngcontent-%COMP%] {\n  margin-right: 4vmin;\n  margin-left: 4vmin;\n  background-color: var(--color-background);\n  color: #FFFFFF;\n  border: none;\n  border-radius: 100px;\n}\n\n.footer-duration-left[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  position: absolute;\n  margin-top: 3vh;\n  margin-left: 10%;\n  color: var(--color-light);\n}\n\n.footer-duration-right[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: normal;\n  position: absolute;\n  margin-top: 3vh;\n  float: right;\n  margin-right: 10%;\n  right: 0;\n  clear: both;\n  color: var(--color-light);\n}\n\n@media (max-width: 480px) {\n  .description-container[_ngcontent-%COMP%] {\n    margin-top: 8vh;\n  }\n\n  .song-footer[_ngcontent-%COMP%] {\n    margin-top: 8vh;\n  }\n\n  .icons[_ngcontent-%COMP%] {\n    margin-top: 3vh;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC9zb25nL3NvbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Nvbmcvc29uZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsYUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FDSUY7O0FERkE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLGtDQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ09GOztBREpBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ09GOztBRExBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUNRRjs7QURMQTtFQUNFLGVBQUE7RUFDQSxzQkFBQTtBQ1FGOztBRExBO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7QUNRRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNRRjs7QUROQTtFQUNFLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNTRjs7QURQQTtFQUNFLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO09BQUEsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFFQSx3QkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkZBQUE7QUNVRjs7QURQQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUEE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDVUY7O0FEUkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ1dGOztBRFRBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ1lGOztBRFZBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtBQ2FGOztBRFZBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ2FGOztBRFZBO0VBQ0U7SUFDRSxlQUFBO0VDYUY7O0VEWEE7SUFDRSxlQUFBO0VDY0Y7O0VEWkE7SUFDRSxlQUFBO0VDZUY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Nvbmcvc29uZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXYtYm94e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGxlZnQ6MDtcbiAgcmlnaHQ6MDtcbiAgdG9wOjEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgbWFyZ2luLXRvcDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cblxuLnNvbmctY29udGFpbmVye1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IC0xMHB4O1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmFja2dyb3VuZCk7XG4gIGhlaWdodDogMTAwdmg7XG59XG4ubGlrZS1pY29ue1xuICBmbG9hdDpyaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG4ubW9yZS1pY29ue1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuLm1pbmltaXplLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXZoO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDJ2bWF4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4wKTtcbn1cbi5tb3JlLWJ1dHRvbntcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXZoO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMnZtYXg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjApO1xufVxuLnNvbmctdGl0bGV7XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAzdmg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5hbGJ1bS10aXRsZXtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDRweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYmFja2dyb3VuZC1pbWFnZXtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogODB2bWluO1xuICB3aWR0aDogODB2bWluO1xuICBtYXgtd2lkdGg6IDUwdmg7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG59XG4uZGVzY3JpcHRpb257XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2lkdGg6IDcwdm1pbjtcbiAgbWF4LXdpZHRoOiA0NXZoO1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBpbmhlcml0O1xuICBmb250LXNpemU6IDkyJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXJ7XG4gIG1hcmdpbi10b3A6IDh2aDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnNvbmctZm9vdGVye1xuICBtYXJnaW4tdG9wOiA2dmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDA7XG4gIG1hcmdpbi1sZWZ0OiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb290ZXItc29uZy10aXRsZXtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cbi5mb290ZXItc29uZy1hcnRpc3R7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG4uc2xpZGVye1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDgwJTtcbiAgcmlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuMnM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzO1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNvbG9yLXRleHQpIGNhbGMoMCoxJSksIHZhcigtLWNvbG9yLXNlY29uZGFyeSkgMCk7IC8vQWRkIHZhcmlhYmxlIHRvIG1vdmUgc2hhZG93XG59XG5cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb25ze1xuICBtYXJnaW4tdG9wOiA0dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbntcbiAgbWFyZ2luLXJpZ2h0OiA0dm1pbjtcbiAgbWFyZ2luLWxlZnQ6IDR2bWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG4uZm9vdGVyLWR1cmF0aW9uLWxlZnR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG59XG5cbi5mb290ZXItZHVyYXRpb24tcmlnaHR7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG4gIHJpZ2h0OiAwO1xuICBjbGVhcjogYm90aDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5kZXNjcmlwdGlvbi1jb250YWluZXJ7XG4gICAgbWFyZ2luLXRvcDogOHZoO1xuICB9XG4gIC5zb25nLWZvb3RlcntcbiAgICBtYXJnaW4tdG9wOiA4dmg7XG4gIH1cbiAgLmljb25zIHtcbiAgICBtYXJnaW4tdG9wOiAzdmg7XG4gIH1cbn1cbiIsIi5kaXYtYm94IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHotaW5kZXg6IDE7XG59XG5cbi5zb25nLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogLTEwcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmxpa2UtaWNvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMCU7XG59XG5cbi5tb3JlLWljb24ge1xuICBmb250LXNpemU6IDJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IC05cHg7XG4gIG1hcmdpbi10b3A6IC0xMHB4O1xufVxuXG4ubWluaW1pemUtYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDIuNXZoO1xuICBmbG9hdDogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDJ2bWF4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5tb3JlLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAyLjV2aDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDJ2bWF4O1xuICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG59XG5cbi5zb25nLXRpdGxlIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgcGFkZGluZy10b3A6IDN2aDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYWxidW0tdGl0bGUge1xuICBtYXJnaW4tdG9wOiAwO1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5iYWNrZ3JvdW5kLWltYWdlIHtcbiAgb3BhY2l0eTogMC41O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGhlaWdodDogODB2bWluO1xuICB3aWR0aDogODB2bWluO1xuICBtYXgtd2lkdGg6IDUwdmg7XG4gIG1heC1oZWlnaHQ6IDUwdmg7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgd2lkdGg6IDcwdm1pbjtcbiAgbWF4LXdpZHRoOiA0NXZoO1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiBpbmhlcml0O1xuICBmb250LXNpemU6IDkyJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5kZXNjcmlwdGlvbi1jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiA4dmg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5zb25nLWZvb3RlciB7XG4gIG1hcmdpbi10b3A6IDZ2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogMDtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvb3Rlci1zb25nLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbn1cblxuLmZvb3Rlci1zb25nLWFydGlzdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBmb250LXNpemU6IDEzcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG59XG5cbi5zbGlkZXIge1xuICBtYXJnaW4tdG9wOiAydmg7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDgwJTtcbiAgcmlnaHQ6IDEwMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3Itc2Vjb25kYXJ5KTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjJzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnM7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHZhcigtLWNvbG9yLXRleHQpIGNhbGMoMCoxJSksIHZhcigtLWNvbG9yLXNlY29uZGFyeSkgMCk7XG59XG5cbi5zbGlkZXI6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItdGV4dCk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnNsaWRlcjo6LW1vei1yYW5nZS10aHVtYiB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci10ZXh0KTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbnMge1xuICBtYXJnaW4tdG9wOiA0dmg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLXJpZ2h0OiA0dm1pbjtcbiAgbWFyZ2luLWxlZnQ6IDR2bWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1iYWNrZ3JvdW5kKTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG59XG5cbi5mb290ZXItZHVyYXRpb24tbGVmdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiAzdmg7XG4gIG1hcmdpbi1sZWZ0OiAxMCU7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG59XG5cbi5mb290ZXItZHVyYXRpb24tcmlnaHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogM3ZoO1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogMTAlO1xuICByaWdodDogMDtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZGVzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA4dmg7XG4gIH1cblxuICAuc29uZy1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDh2aDtcbiAgfVxuXG4gIC5pY29ucyB7XG4gICAgbWFyZ2luLXRvcDogM3ZoO1xuICB9XG59Il19 */"], data: { animation: _global_content__WEBPACK_IMPORTED_MODULE_2__["upDownAnimation"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SongComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-song',
                templateUrl: './song.component.html',
                styleUrls: ['./song.component.scss'],
                animations: _global_content__WEBPACK_IMPORTED_MODULE_2__["upDownAnimation"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/top-five/top-five.component.ts":
/*!************************************************!*\
  !*** ./src/app/top-five/top-five.component.ts ***!
  \************************************************/
/*! exports provided: TopFiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopFiveComponent", function() { return TopFiveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _global_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../global-content */ "./src/app/global-content.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





function TopFiveComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const exp_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/song/", exp_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", exp_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.name[ctx_r0.langId]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r1.duration[ctx_r0.langId]);
} }
class TopFiveComponent {
    constructor() {
        this.texts = [
            ["Popular", "Popular"],
        ];
        this.experiences = [];
    }
    ngOnInit() {
        if (_global_content__WEBPACK_IMPORTED_MODULE_1__["lang"].split('-')[0] === 'es') {
            this.langId = 1;
        }
        else {
            this.langId = 0;
        }
        for (let i = 1; i < 6; i++) {
            let tmp = _global_content__WEBPACK_IMPORTED_MODULE_1__["songs"].find(song => song.id === i);
            if (tmp)
                this.experiences.push(tmp);
            else
                break;
        }
    }
}
TopFiveComponent.ɵfac = function TopFiveComponent_Factory(t) { return new (t || TopFiveComponent)(); };
TopFiveComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopFiveComponent, selectors: [["app-top-five"]], decls: 4, vars: 2, consts: [[1, "title-div"], [1, "exp-list"], ["class", "exp-holder", "routerLinkActive", "active", 3, "routerLink", 4, "ngFor", "ngForOf"], ["routerLinkActive", "active", 1, "exp-holder", 3, "routerLink"], [1, "exp-image", 3, "src"], [1, "exp-id"], [1, "exp-name"], [1, "exp-duration"]], template: function TopFiveComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopFiveComponent_li_3_Template, 8, 5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.texts[0][ctx.langId], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experiences);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".title-div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 500px;\n  font-weight: bold;\n  margin-top: 35px;\n}\n\n.exp-list[_ngcontent-%COMP%] {\n  margin: 0px;\n  margin-top: 10px;\n  -webkit-padding-start: 0px;\n          padding-inline-start: 0px;\n  list-style-type: none;\n}\n\n.exp-holder[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.12);\n  cursor: pointer;\n}\n\n.exp-holder[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50px 10px repeat(auto-fit, minmax(100px, 1fr)) 130px;\n  font-weight: lighter;\n  margin-left: 10px;\n  margin-right: 10px;\n  padding-left: -16px;\n  border-bottom: 1px solid var(--color-secondary);\n}\n\n.exp-name[_ngcontent-%COMP%] {\n  grid-column: 3/5;\n  grid-row: 1;\n  height: auto;\n  margin-bottom: 1px;\n  margin-left: 20px;\n  padding-top: 11px;\n  text-align: left;\n  font-size: 14px;\n}\n\n.exp-duration[_ngcontent-%COMP%] {\n  grid-column: 4/6;\n  grid-row: 1;\n  height: auto;\n  margin-right: 10px;\n  margin-bottom: 1px;\n  padding-top: 11px;\n  text-align: right;\n  color: var(--color-light);\n  font-size: 14px;\n}\n\n.exp-id[_ngcontent-%COMP%] {\n  grid-column: 2;\n  grid-row: 1;\n  padding-top: 11px;\n  height: auto;\n  font-size: 14px;\n}\n\n.exp-image[_ngcontent-%COMP%] {\n  grid-column: 1;\n  grid-row: 1;\n  height: 40px;\n  width: 40px;\n}\n\n@media (max-width: 480px) {\n  .exp-id[_ngcontent-%COMP%] {\n    grid-row: 1/3;\n    grid-column: 1;\n    font-size: 103%;\n    text-align: center;\n  }\n\n  .exp-holder[_ngcontent-%COMP%] {\n    margin: 15px;\n    margin-left: 25px;\n    grid-template-columns: 40px 50px repeat(auto-fit, minmax(100px, 1fr)) 130px;\n    border-bottom: unset;\n  }\n\n  .exp-duration[_ngcontent-%COMP%] {\n    grid-column: 3/5;\n    grid-row: 2;\n    padding-top: 0;\n    text-align: left;\n    margin-left: 6px;\n  }\n\n  .exp-image[_ngcontent-%COMP%] {\n    grid-column: 2;\n    grid-row: 1/3;\n    height: 45px;\n    width: 45px;\n  }\n\n  .exp-name[_ngcontent-%COMP%] {\n    margin-left: 6px;\n    padding-top: 3px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FudGlsb29wZS9Eb2N1bWVudHMvdWNjL2Zyb250ZW5kL3JvZHJpLXBhZ2Uvc3JjL2FwcC90b3AtZml2ZS90b3AtZml2ZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wLWZpdmUvdG9wLWZpdmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO1VBQUEseUJBQUE7RUFDQSxxQkFBQTtBQ0VGOztBREFBO0VBQ0UsMkNBQUE7RUFDQSxlQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsMkVBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtDQUFBO0FDSUY7O0FERkE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNNRjs7QURKQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQ09GOztBRExBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1FGOztBRExBO0VBQ0U7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLGVBQUE7SUFDQSxrQkFBQTtFQ1FGOztFRE5BO0lBQ0UsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsMkVBQUE7SUFDQSxvQkFBQTtFQ1NGOztFRFBBO0lBQ0UsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7RUNVRjs7RURSQTtJQUNFLGNBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNXRjs7RURUQTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkFBQTtJQUFBLHdCQUFBO0lBQUEsbUJBQUE7RUNZRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvdG9wLWZpdmUvdG9wLWZpdmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0bGUtZGl2e1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuLmV4cC1saXN0e1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLmV4cC1ob2xkZXI6aG92ZXJ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC4xMik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5leHAtaG9sZGVye1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMTBweCByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxMDBweCwxZnIpKSAxMzBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogLTE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuLmV4cC1uYW1le1xuICBncmlkLWNvbHVtbjogMy81O1xuICBncmlkLXJvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmV4cC1kdXJhdGlvbntcbiAgZ3JpZC1jb2x1bW46IDQvNjtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmV4cC1pZHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAxO1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uZXhwLWltYWdle1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZXhwLWlke1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgZ3JpZC1jb2x1bW46IDE7XG4gICAgZm9udC1zaXplOiAxMDMlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAuZXhwLWhvbGRlcntcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDUwcHggcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTAwcHgsMWZyKSkgMTMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogdW5zZXQ7XG4gIH1cbiAgLmV4cC1kdXJhdGlvbntcbiAgICBncmlkLWNvbHVtbjogMy81O1xuICAgIGdyaWQtcm93OiAyO1xuICAgIHBhZGRpbmctdG9wOiAwO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgfVxuICAuZXhwLWltYWdle1xuICAgIGdyaWQtY29sdW1uOiAyO1xuICAgIGdyaWQtcm93OiAxLzM7XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICB9XG4gIC5leHAtbmFtZXtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxufVxuIiwiLnRpdGxlLWRpdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDM1cHg7XG59XG5cbi5leHAtbGlzdCB7XG4gIG1hcmdpbjogMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBwYWRkaW5nLWlubGluZS1zdGFydDogMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5leHAtaG9sZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZXhwLWhvbGRlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTBweCAxMHB4IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKSAxMzBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogLTE2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1zZWNvbmRhcnkpO1xufVxuXG4uZXhwLW5hbWUge1xuICBncmlkLWNvbHVtbjogMy81O1xuICBncmlkLXJvdzogMTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZXhwLWR1cmF0aW9uIHtcbiAgZ3JpZC1jb2x1bW46IDQvNjtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0KTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZXhwLWlkIHtcbiAgZ3JpZC1jb2x1bW46IDI7XG4gIGdyaWQtcm93OiAxO1xuICBwYWRkaW5nLXRvcDogMTFweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5leHAtaW1hZ2Uge1xuICBncmlkLWNvbHVtbjogMTtcbiAgZ3JpZC1yb3c6IDE7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDQwcHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZXhwLWlkIHtcbiAgICBncmlkLXJvdzogMS8zO1xuICAgIGdyaWQtY29sdW1uOiAxO1xuICAgIGZvbnQtc2l6ZTogMTAzJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuZXhwLWhvbGRlciB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCA1MHB4IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDEwMHB4LCAxZnIpKSAxMzBweDtcbiAgICBib3JkZXItYm90dG9tOiB1bnNldDtcbiAgfVxuXG4gIC5leHAtZHVyYXRpb24ge1xuICAgIGdyaWQtY29sdW1uOiAzLzU7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgcGFkZGluZy10b3A6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tbGVmdDogNnB4O1xuICB9XG5cbiAgLmV4cC1pbWFnZSB7XG4gICAgZ3JpZC1jb2x1bW46IDI7XG4gICAgZ3JpZC1yb3c6IDEvMztcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgd2lkdGg6IDQ1cHg7XG4gIH1cblxuICAuZXhwLW5hbWUge1xuICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgcGFkZGluZy10b3A6IDNweDtcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopFiveComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-top-five',
                templateUrl: './top-five.component.html',
                styleUrls: ['./top-five.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/antiloope/Documents/ucc/frontend/rodri-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map