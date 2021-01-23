
(function (window) {
var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim", "James"];
for (var i = 0; i <names.length; i++) {
  var firstletter = names[i].charAt(0);
  if (firstletter==='J' || firstletter==='j') {
    byespeaker.speak(names[i]);
  }
  else {
     hellospeaker.speak(names[i]);
  }

}
})(window);
