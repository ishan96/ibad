
(function(window) { 

	var helloSpeaker = {};
	helloSpeaker.name=helloSpeaker.speak;
    
	var speakWord = "Hello ";


helloSpeaker.speak=function () {
  console.log(speakWord + " " + names[i]);
}
window.helloSpeaker=helloSpeaker;
})(window);
