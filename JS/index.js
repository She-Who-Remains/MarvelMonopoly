var characterImages = [
    {id: 'blackPanther', src: 'images/black-panther-removebg-preview.png', alt:'Black Panther Character'},
    {id: 'blueMarvel', src: 'images/blue-marvel-removebg-preview.png', alt:'Blue Marvel Character'},
    {id: 'captainAmerica', src: 'images/captain-america-removebg-preview.png', alt:'Captain America Character'},
    {id: 'captainMarvel', src: 'images/captain-marvel-removebg-preview.png', alt:'Captain Marvel Character'},
    {id: 'moonKnight', src: 'images/moon-knight-removebg-preview.png', alt:'Moon Knight Character'},
    {id: 'quickSilver', src: 'images/quick-silver-removebg-preview.png', alt:'Quick Silver Character'},
    {id: 'thor', src: 'images/thor-removebg-preview.png', alt:'Thor Character'},
]

//THIS IS A FUNCTION TO DYNAMICALLY CREATE IMAGE ELEMENTS
function createCharacterImages() {
    var characterGallery = document.getElementById('characterGallery');
    // CLEARS EXISTING CONTENT
     characterGallery.innerHTML = ''; 

    characterImages.forEach(function (image) {
        var button = document.createElement('button');
        button.classList.add('btn');
        button.classList.add('character');
        button.classList.add('gray--scale');
        button.onclick = function () {
            characterNameDone(characterImages.id)
        };

        var img = document.createElement('img');
        img.classList.add('character', 'img-fluid');
        img.src = image.src;
        img.alt = image.alt;
        img.id = image.id;

        button.appendChild(img);
        characterGallery.appendChild(button);
    });

}


function characterNameDone(imageId) {

    // console.log("I was clicked");
    var usernameInput = document.getElementById('username');

    // CHECKS IF A USER HAS ENTERED A CHARACTER NAME
    if (usernameInput.value.trim() === '') {
        alert('Please enter a character name!');
         // Prevent from submission
        // return false;
        return;
    }

    // REMOVES THE GRAY COLOR FROM IMAGE ONCE NAMED
    var allImages = document.querySelectorAll('.character');
    allImages.forEach( function (img) {
        img.classList.remove('gray--scale');
    });

    // var clickedImage = document.getElementById(imageId);
    // if (clickedImage) {
    //   clickedImage.classList.add('gray--scale');
    // }

    // return true;
}

function chooseImage() {


}

function characterDoneButton(){
    document.querySelector('.setup--buttons').classList.remove('hidden');
}

// Initialize the gallery when the page loads
window.onload = createCharacterImages;