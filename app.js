var dode =  document.getElementById('dode');

if (document.body.animate) {
  var a = dode.animate({
    transform: ['rotateY(0deg) rotateZ(0deg) rotateX(0deg) translate3d(0,0,-20vmin) ', ' rotateY(3600deg) rotateZ(1800deg) rotateX(-720deg)  translate3d(0,0,-20vmin) ']
  }, {
    duration: 28000,
    iterations: Infinity
  });

  a.currentTime = 0;
  a.playbackRate = .3;
}


var numbered = 0;
changeState();
setInterval(changeState, 3000);

function changeState() {
  numbered++;
  if (numbered % 4 !== 0) {
    dode.style.setProperty('--fold', '-63.5deg')
  } else {
     dode.style.setProperty('--fold', '0deg')
  }
}

function codeRan(){
    console.log("code ran");
    console.log(dode);
}