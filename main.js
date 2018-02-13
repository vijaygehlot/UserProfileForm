// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyDJ_gsN0ZjNjUD4xCV8YZh-AtFsjtc8Gl8",
    authDomain: "user-7ed08.firebaseapp.com",
    databaseURL: "https://user-7ed08.firebaseio.com",
    projectId: "user-7ed08",
    storageBucket: "user-7ed08.appspot.com",
    messagingSenderId: "19557988979"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('user_Info');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var file = getInputVal('file');
    var email = getInputVal('email');
    var phone = getInputVal('phone');

    // Save message
    saveMessage(name, file, email, phone);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function() {
        document.querySelector('.alert').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, file, email, phone) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        file: file,
        email: email,
        phone: phone

    });

}