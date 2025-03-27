// Sticky Navigation Menu
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");

// Show/hide sticky navigation and scroll button based on scroll position
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  } else {
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }
};

// Side Navigation Menu
let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");

// Open side navigation
menuBtn.onclick = function () {
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
};

const hideNavMenu = () => {
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
};

// Close side navigation
cancelBtn.onclick = hideNavMenu;

// Close side navigation when a menu link is clicked
let navLinks = document.querySelectorAll(".menu li a");
navLinks.forEach((link) => {
  link.addEventListener("click", hideNavMenu);
});

// Contact Form Handling
let form = document.querySelector(".contact form");
let submit = document.querySelector(".contact form .submit-btn");

// Add event listener for form submission
submit.onclick = function (event) {
  event.preventDefault(); // Prevent default form submission

  // Validate form fields
  let name = form.querySelector("input[type='text']").value; // name field
  let contactNo = form.querySelector("input[type='Contact_No']").value; // contact number field
  let message = form.querySelector("textarea").value; // query field

  // Check if any field is empty
  if (name === "" || contactNo === "" || message === "") {
    alert("Please fill in all fields.");
    return;
  }

  // If all fields are valid, show a success message
  alert("Form submitted successfully!");

  // Reset the form after submission
  form.reset();
};
