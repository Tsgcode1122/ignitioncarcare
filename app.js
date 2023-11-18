const image = document.querySelectorAll(".moving-imag");

image.forEach((image) => {
  const index = parseInt(image.getAttribute("data-index"));
  image.style.animationDelay = `${(index - 1) * 2}s`; // Adjust the delay as needed
});

//
// ********** set date ************
// select span
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
// slider@@@@@@
// submenu
//
document.addEventListener("DOMContentLoaded", function () {
  const toggleNav = document.getElementById("navbarToggle");
  const sidebarOverlay = document.getElementById("sidebar-overlay");
  const closeNav = document.getElementById("navbar-close");

  toggleNav.addEventListener("click", () => {
    sidebarOverlay.classList.add("show");
    closeNav.classList.add("show");
    toggleNav.classList.add("show");
  });
  closeNav.addEventListener("click", () => {
    sidebarOverlay.classList.remove("show");
    closeNav.classList.remove("show");
    toggleNav.classList.remove("show");
  });
});
//
// Store references to the images
window.onload = function () {
  const images = document.querySelectorAll(".background-image");
  let currentIndex = 0;

  
  images.forEach(image => {
    image.style.display = "none";
  });


  function changeImage() {
    images[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = "block";
    setTimeout(changeImage, 5000);
  }

  
  images[currentIndex].style.display = "block";
  changeImage();
};

// another animatation

const animatedElements = document.querySelectorAll(".Useranimate");
function checkifVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function updateContentVisibility() {
  animatedElements.forEach((animatedElement) => {
    if (checkifVisible(animatedElement)) {
      animatedElement.classList.add("Useranimate");
    } else {
      animatedElement.classList.remove("Useranimate");
    }
  });
}

window.addEventListener("scroll", updateContentVisibility);
window.addEventListener("resize", updateContentVisibility);
updateContentVisibility();

// right slide
// Function to check if the element with the specified class is in the viewport
const tAnimate = document.querySelectorAll(".Useranimateright");
function ifVisible(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function updateVisibility() {
  tAnimate.forEach((tAnimates) => {
    if (ifVisible(tAnimates)) {
      tAnimates.classList.add("Useranimateright");
    } else {
      tAnimates.classList.remove("Useranimateright");
    }
  });
}

window.addEventListener("scroll", updateVisibility);
window.addEventListener("resize", updateVisibility);
updateVisibility();

// another an
const taAnimate = document.querySelectorAll(".animate");
function ifSeen(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function updateVisible() {
  taAnimate.forEach((taAnimates) => {
    if (ifSeen(taAnimates)) {
      taAnimates.classList.add("animate");
    } else {
      taAnimates.classList.remove("animate");
    }
  });
}

window.addEventListener("scroll", updateVisible);
window.addEventListener("resize", updateVisible);
updateVisible();

// about anima uup
const tAnimaate = document.querySelectorAll(".Useranimateup");
function ifVisble(element) {
  const rect = element.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function updateVisiblity() {
  tAnimate.forEach((tAnimaates) => {
    if (ifVisble(tAnimaates)) {
      tAnimaates.classList.add("Useranimateup");
    } else {
      tAnimaates.classList.remove("Useranimateup");
    }
  });
}

window.addEventListener("scroll", updateVisiblity);
window.addEventListener("resize", updateVisiblity);
updateVisiblity();


// form submission
var form = document.getElementById("my-form");
var submissionStatus = document.getElementById("submission-status");
async function handleSubmit(event) {
  event.preventDefault();

  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        submissionStatus.style.display = "block";
        submissionStatus.innerHTML = "<p>Thanks for choosing Ignition Car care! 🚗✨ We'll be in touch ASAP.</p>" + "<p>For any quick questions or updates, feel free to reach us on WhatsApp: <a  href='https://api.whatsapp.com/send?phone=2347047725690' target='_blank' class='submitwhatsapp' >Message Now!!!</a></p>";
        form.reset(); // Reset the form inputs
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// faqs
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.custom-accordion-item');

    accordionItems.forEach(item => {
        const button = item.querySelector('.custom-button');
        const panel = item.querySelector('.custom-panel');

        button.addEventListener('click', () => {
            const isActive = panel.classList.toggle('show');
            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.custom-panel').classList.remove('show');
                }
            });

            accordionItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.querySelector('.custom-button').classList.remove('active');
                }
            });

            button.classList.toggle('active', isActive);
        });
    });
});
