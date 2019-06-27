var openVideo = require('./openVideo');

function openCamera(idVideo,callback){
	navigator.getUserMedia({ audio: true, video: true },
      	function(stream) {
         	callback(stream);
      	},
      	function(err) {
         	console.log(err);
      	}
   	);
}

module.exports = openCamera;