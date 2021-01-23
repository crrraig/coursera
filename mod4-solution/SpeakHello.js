(function(window){
var hellospeaker = {};
var speakword = "Hello";
hellospeaker.speak = function(names){
  console.log(speakword + " " + names);
}
window.hellospeaker = hellospeaker;
})(window);