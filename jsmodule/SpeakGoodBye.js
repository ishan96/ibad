
(function(window) { 
	var byeSpeaker ={};
	byeSpeaker.name=byeSpeaker.speak;

var speakWord = "Good Bye";


byeSpeaker.speak=function () {
  console.log(speakWord + " " + names[i]);
}
window.byeSpeaker=byeSpeaker;
})(window);
