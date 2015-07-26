var audio = new Audio();

var radio = "";
function setRadio(rad) {
    radio = rad;
}
function getRadio() {
    return radio;
}

//RFA
var theTitle = "";
var theLink = "";
function setTitle(title) {
    theTitle = title;
}
function getTitle() {
    return theTitle;
}
function setLink(link) {
    theLink = link;
}
function getLink() {
    return theLink;
}
//---------------------------

//VOA morning
var theTitleVoa = "";
var theLinkVoa = "";
function setTitleVoa(title) {
    theTitleVoa = title;
}
function getTitleVoa() {
    return theTitleVoa;
}
function setLinkVoa(link) {
    theLinkVoa = link;
}
function getLinkVoa() {
    return theLinkVoa;
}
//---------------------------

//VOA evening
var theTitleVoaE = "";
var theLinkVoaE = "";
function setTitleVoaE(title) {
    theTitleVoaE = title;
}
function getTitleVoaE() {
    return theTitleVoaE;
}
function setLinkVoaE(link) {
    theLinkVoaE = link;
}
function getLinkVoaE() {
    return theLinkVoaE;
}
//---------------------------



//ABC
var theTitleAbc = "";
var theLinkAbc = "";
function setTitleAbc(title) {
    theTitleAbc = title;
}
function getTitleAbc() {
    return theTitleAbc;
}
function setLinkAbc(link) {
    theLinkAbc = link;
}
function getLinkAbc() {
    return theLinkAbc;
}
//---------------------------


var theTimer;
function setTimer(t) {
    theTimer = t;
}
function getTimer(t) {
    return theTimer;
}

function start(songLink) {
    audio.src = songLink;
    audio.play();

    //audio.addEventListener('playing', function () {

    //    setTimer(audio.duration);

    //    chrome.runtime.sendMessage({ func: "duration" }, function (response) {
    //    });

    //});
   

    audio.addEventListener('ended', function () {
            alert('កម្មវិធីបានបញ្ចប់ សូមអរុណ');
    });
}

function stop() {
    audio.pause();
}

function isPlaying() {
    var res = false;

    if (audio.duration > 0 && !audio.paused) {
        res = true;
    }else{
        res = false;
    }

    return res;
}



