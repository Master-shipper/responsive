// Get reference to DOM elements
const recordButton = document.getElementById('recordButton');
const audioElement = document.getElementById('audioElement');

// Initialize audio recorder
let mediaRecorder;
let chunks = [];

navigator.mediaDevices.getUserMedia({ audio: true })
    .then(function(stream) {
        mediaRecorder = new MediaRecorder(stream);

        // Handle data available event
        mediaRecorder.ondataavailable = function(event) {
            chunks.push(event.data);
        };

        // Handle recording stopped event
        mediaRecorder.onstop = function() {
            const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
            chunks = [];
            const audioURL = window.URL.createObjectURL(blob);
            audioElement.src = audioURL;
        };
    })
    .catch(function(err) {
        console.log('The following error occurred: ' + err);
    });

// Event listener for record button click
recordButton.addEventListener('click', function() {
    if (mediaRecorder.state === 'inactive') {
        mediaRecorder.start();
        recordButton.textContent = 'Stop';
    } else {
        mediaRecorder.stop();
        recordButton.textContent = 'Record';
    }
});
