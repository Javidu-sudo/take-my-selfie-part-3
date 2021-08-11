var SpeechRecognition = window.webkitSpeechRecognition; 
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = ""
    recognition.start()
}
recognition.onresult = function (event){
    console.log(event)
    var content = event.results[0][0].transcript
if(content == "take my selfie"){
    console.log("takeing selfie")
    speak()
}
    console.log(content)
    document.getElementById("textbox").innerHTML = content
}
function speak(){
    var synth = window.speechSynthesis
    speakData = "Taking selfie in 5 secounds"
    var utterThis = new SpeechSynthesisUtterance(speakData)
    synth.speak(utterThis)
    Webcam.attach(camera)
    setTimeout(function() {
        take_snap()
        save()
            },5000)
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:90
})
camera = document.getElementById("camera")
function take_snap(){
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML="<img id='selfie_img' src='"+data_uri+"'>"
    });
}
function save(){
    link = document.getElementById("link")
    img = document.getElementById("selfie_img")
    link.href = img
    link.click()
}
