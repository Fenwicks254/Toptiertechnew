let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

// Initial call to start the automatic slideshow
showSlides();

// Function for automatic slideshow
function showSlides() {
  // 1. Hide all slides by default
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  // 2. Remove the 'active' class from all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // 3. Increment slide index (wraps around)
  slideIndex++;
  if (slideIndex > slides.length) {
      slideIndex = 1; // Loop back to the first slide
  }    
  
  // 4. Display the current slide and mark the current dot as active
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  
  // 5. Change image every 5 seconds (5000 milliseconds)
  setTimeout(showSlides, 5000); 
}

// Function for manual dot navigation (called from the HTML's onclick)
function currentSlide(n) {
    // Setting slideIndex to n-1 allows the showSlides() function to correctly display slide 'n' after it increments slideIndex++.
    slideIndex = n - 1; 
    
    // Stop the current automatic timer and immediately display the selected slide
    clearTimeout(); 
    showSlides(); 
}