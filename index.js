// Make the DIV element draggable:
dragElement(document.getElementById("bio"));
dragElement(document.getElementById("cont"));
dragElement(document.getElementById("vid"));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "_text")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "_text").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var channel = document.getElementById("channel");

function playPauseVideo() {
  if (channel.paused) {
    channel.play();
  } else {
    channel.pause();
  }
}

var channelSources = [
  "res/videos/Miku.mp4",
  "res/videos/Teto.mp4",
  "res/videos/Luigi.mp4",
  "res/videos/Homer.mp4",
  "res/videos/volume.mp4",
  "res/videos/scream.mp4",
  "res/videos/fish.mp4"
];

function changeChannel() {
    var video = document.getElementById("channel");
    i = Math.floor(Math.random() * channelSources.length -1)+1;
    video.src = channelSources[i];
    video.load();
    video.play();
}
