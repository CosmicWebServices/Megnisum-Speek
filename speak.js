/**
Megnisum Speek v1.0.0

Go to https://scratch.mit.edu/projects/92865757/

Go to JS Console and copy an Paste this code!
**/

new (function() {
var ext = this;

var recognized_speech = '';

ext.recognize_speech = function (callback) {
var recognition = new webkitSpeechRecognition();
recognition.onresult = function(event) {
if (event.results.length > 0) {
recognized_speech = event.results[0][0].transcript;
if (typeof callback=="function") callback();
}
};
recognition.start();
};

ext.recognized_speech = function () {return recognized_speech;};

ext._shutdown = function() {};

ext._getStatus = function() {
if (window.webkitSpeechRecognition === undefined) {
return {status: 1, msg: 'Your browser does not support speech recognition. Try using Google Chrome.'};
}
return {status: 2, msg: 'Ready'};
};

var descriptor = {
blocks: [
['w', 'wait and recognize speech', 'recognize_speech'],
['r', 'recognized speech', 'recognized_speech']
],
};

ScratchExtensions.register('Speech To Text', descriptor, ext);
})();
new (function() {
var ext = this;

// Cleanup function when the extension is unloaded
ext._shutdown = function() {};

// Status reporting code
// Use this to report missing hardware, plugin or unsupported browser
ext._getStatus = function() {
return {status: 2, msg: 'Ready'};
};

ext.speak = function(text) {
msg = new SpeechSynthesisUtterance(text);
window.speechSynthesis.speak(msg);
};

// Block and block menu descriptions
var descriptor = {
blocks: [
['', 'speak %s', 'speak', "Hello!"],
]
};

// Register the extension
ScratchExtensions.register('Simple text to speech extension', descriptor, ext);
})();

(function(ext) {
// Cleanup function when the extension is unloaded
ext._shutdown = function() {};

// Status reporting code
// Use this to report missing hardware, plugin or unsupported browser
ext._getStatus = function() {
return {status: 2, msg: 'Ready'};
};
ext.alarm = function(t){
setTimeout(function(){ alert("Timer done"); },t);
};
// Block and block menu descriptions
var descriptor = {
blocks: [
[' ','Set alarm for %n secs','alarm']
]
};

// Register the extension
ScratchExtensions.register('Alarm', descriptor, ext);
})({});

