$(function () {
  "use strict";

  var popcorn = Popcorn("audio");
  popcorn.autoplay(false);

  popcorn.on('canplay', popcorn.play.bind(popcorn, undefined));

  [1, 30, 45, 61, 77, 94, 109, 124, 140, 155, 171, 188].forEach(function (v) {
    popcorn.cue(v, Reveal.right);
  });
});

