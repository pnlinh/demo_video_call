var Peer = require('simple-peer');
var openCamera = require('./openCamera');
var openVideo = require('./openVideo');

openCamera('yourCam',function(stream){
	openVideo('yourCam',stream);
	var p = new Peer({ initiator: location.hash === '#1', trickle: false, stream });

	p.on('signal',function(data){
		document.querySelector('#yourSignal').value = JSON.stringify(data);
	});

	document.getElementById('connect').onclick = function(){
		var yourFrSignal = JSON.parse(document.getElementById('yourFrSignal').value);
		p.signal(yourFrSignal);
	}

	p.on('stream',function(frStream){
		openVideo('yourFrCam',frStream);
	});
});