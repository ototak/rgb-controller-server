var express = require("express");
var express_app = express()
const {Client} = require("openrgb-sdk")
const {utils} = require("openrgb-sdk")
async function setRGB(color){

		let violet = utils.hexColor("#"+color)

		const client = new Client("rgbapi",6742,"localhost")
		await client.connect()

		const deviceCount = await client.getControllerCount()

		let devices = []
		for(let i = 0 ; i < deviceCount;i++){
				devices.push(await client.getControllerData(i))
				const colors = Array(devices[i].colors.length).fill({

						red:violet.red,
						green:violet.green,
						blue:violet.blue
				})
				client.updateLeds(i,colors)
		}
		

		

		await client.disconnect()


}
var server = express_app.listen(3000 ,function(){
console.log("Server started!"+server.address().port);});

var sample = {
		id:222
}

express_app.get("/api/rgb/:color",function(req,res,next){
		setRGB(req.params.color)
		res.json(req.params.color)
		console.log(req.params.color)
});
