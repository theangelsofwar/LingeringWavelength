var comm = new Icecomm('');

comm.on('local', function(options){
    localVideo.src = options.stream;
});

comm.on('connected', function(options){
    document.body.appendChild(options.video);
});


comm.on('disconnect', function(options){
    document.getElementById(options.callerID).remove();
});

comm.connect('custom room', {audio: false});