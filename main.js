var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);
    var content = event.results[0][0].transcript;

    if (content == "selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";

    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);

    Webcam.attach("camera");

    setTimeout(
        function() {
        take_snapshot();
        
    }, 
    5000);
    
    setTimeout(
        function() {
        take_snapshot1();
        
    }, 
    10000);
    
    setTimeout(
        function() {
        take_snapshot2();
        
    }, 
    15000);
}

Webcam.set({
    width: 360,
    height: 250,
    image_format: 'png',
    png_quality: 90
});



function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML = '<img id = "selfie_image1" src = "'+data_uri+'">';
    });
}
function take_snapshot1() {
    Webcam.snap(function(data_uri){
        
        document.getElementById("result2").innerHTML = '<img id = "selfie_image2" src = "'+data_uri+'">';
       
    });
}
function take_snapshot2() {
    Webcam.snap(function(data_uri){
       
        document.getElementById("result3").innerHTML = '<img id = "selfie_image3" src = "'+data_uri+'">';
    });
}