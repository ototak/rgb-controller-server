var express = require("express");
var express_app = express()
const {Client} = require("openrgb-sdk")
const {utils} = require("openrgb-sdk")

const SERVER_PORT=3000;

const OPENRGB_PORT=6742;
const OPENRGB_USERNAME="rgbapi";
const OPENRGB_HOST="localhost";

async function setRGB(color){
		let violet = utils.hexColor("#"+color)

		const client = new Client(OPENRGB_USERNAME,OPENRGB_PORT,OPENRGB_HOST) 
		await client.connect() // connect to openrgb.

		const deviceCount = await client.getControllerCount()

		let devices = []
		for(let i = 0 ; i < deviceCount;i++){// change all devices color.
				devices.push(await client.getControllerData(i))
				const colors = Array(devices[i].colors.length).fill({
						red:violet.red,
						green:violet.green,
						blue:violet.blue
				})
				client.updateLeds(i,colors)
		}
		await client.disconnect()//disconnect


}

var server = express_app.listen(SERVER_PORT,function(){//start server
console.log("Server started!"+server.address().port);
});

express_app.get("/api/rgb/:color",function(req,res,next){
		setRGB(req.params.color)
		res.json(req.params.color)
		console.log(req.params.color)
});
