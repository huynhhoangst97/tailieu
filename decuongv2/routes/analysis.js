var express =require("express");
var router = express.Router();

router.get("/",function(req,res) {
	if(req.isAuthenticated()){
		res.render("./analysis");
	}else {
		res.render("./login");
	}
})

//Export
module.exports= router;