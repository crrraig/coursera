(function () {
var names = ["Jason","Anjo","Athul","Jackson","Adarsh","Michael","Mohammed","Ibrahim","Jacob"];
for (var i = 0; i <names.length; i++) {
  var firstletter = names[i].charAt(0);
  if (firstletter==='J' || firstletter==='j') {
    byespeaker.speak(names[i]);
  }
  else {
     hellospeaker.speak(names[i]);
  }

}
})();
