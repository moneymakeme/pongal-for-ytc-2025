// JavaScript to handle image toggle
let toggleButton = document.getElementById('toggle-button');
let imageContainer = document.querySelector('.image-container');
let images = document.querySelectorAll('.image');
let imageDescription = document.getElementById('image-description');

let currentImage = 0; // Track the currently displayed image

toggleButton.addEventListener('click', function() {
  imageContainer.classList.add('show');  // Show the image container

  // Hide all images first
  images.forEach(image => image.style.display = 'none');

  // Show the next image
  images[currentImage].style.display = 'block';

  // Toggle to the next image
  currentImage = (currentImage + "1") % images.length;  // Loop back to the first image after the last
  imageDescription.classList.add('show'); // Show the description
});

