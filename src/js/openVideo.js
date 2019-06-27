function openVideo(idVideo,content){
	var video = document.getElementById(idVideo);
 	video.srcObject = content;
 	video.onloadedmetadata = function(e) {
   		video.play();
	};
}

module.exports = openVideo;