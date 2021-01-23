(function(window){
var byespeaker = {};
var speakword = "GoodBye";
byespeaker.speak = function(names){
  console.log(speakword + " " + names);
}
window.byespeaker = byespeaker;
})(window);
