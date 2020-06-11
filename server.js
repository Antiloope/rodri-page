let express = require('express');
const app = express();

app.use(express.static(__dirname+'/dist/rodri-page'));
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/dist/rodri-page/index.html'));
});

app.listen(process.env.PORT || 8080);
