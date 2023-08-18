import './style.css'
import anime from 'animejs';

// ... (previous code)

// Initial Hexagon Animation
function initialHexagonAnimation() {
  const hexagon = document.getElementById("hexagon");
  if (hexagon) {
    const hexagonPath = hexagon.querySelector("#hexagon path");
    const hexagonY = hexagon.querySelector("#hexagon #Y");

    if (hexagonPath && hexagonY) {
      const anim = anime.timeline({
        loop: false,
        direction: "normal",
        autoplay: false,
        complete: () => {
          // Animation complete, hide hexagon and show content
          hexagon.style.display = "none";
          document.body.classList.add("content-loaded");

          // Show the rest of the content and hide y-container
          const contentContainer = document.querySelector(".content-container") as HTMLElement;
          if (contentContainer) {
            contentContainer.style.display = "block";
          }
          const yContainer = document.querySelector(".y-container") as HTMLElement;
          if (yContainer) {
            yContainer.style.display = "none";
          }
        },
      });

      anim
        .add({
          targets: hexagonPath,
          strokeDashoffset: [anime.setDashoffset, 0],
          easing: "easeInOutQuart",
          duration: 2000,
          delay: (el, i) => i * 250,
        })
        .add({
          targets: hexagonY,
          duration: 1000,
          opacity: [0, 1],
          easing: "easeInOutQuart",
        });

      // Show the hexagon and start animation
      hexagon.style.display = "block";
      anim.play();
    }
  }
}


const mainListDiv = document.getElementById("mainListDiv"),
mediaButton = document.getElementById("mediaButton")
const navLinks = document.querySelectorAll(".main_list ul li a");
function toggleHexagonVisibility(show: boolean) {
  const hexagon = document.getElementById("hexagon");
  if (hexagon) {
    hexagon.style.display = show ? "block" : "none";
  }
}

for (const link of navLinks) {
  link.addEventListener("click", (e) => clickHandler.call(link, e));
}

function clickHandler(this: Element, e: Event) {
  e.preventDefault();
  const href = this.getAttribute("href") as string | null;

  if (href !== null) {
    const target = document.querySelector(href) as HTMLElement;

    if (target) {
      // Hide the hexagon if not on the home section
      if (href !== "#home") {
        toggleHexagonVisibility(false);
      }
      const offsetTop = target.offsetTop;
      scroll({
        top: offsetTop,
        behavior: "smooth",
      });
      // Close the mobile menu (if open)
      mainListDiv?.classList.remove("show_list");
      mediaButton?.classList.remove("active");
    }
  }
}

// Initial Hexagon Animation on page load
window.addEventListener("load", initialHexagonAnimation);

// Restore hexagon visibility when navigating back to home section
window.addEventListener("hashchange", () => {
  const currentHash = window.location.hash;
  if (currentHash === "#home") {
    toggleHexagonVisibility(true);
  } else {
    toggleHexagonVisibility(false);
  }
});



function redirectToLink(element: HTMLElement, url: string) {
  element.addEventListener("click", () => {
    let newWindow = window.open(url, "_blank");
    if (newWindow) {
      newWindow.focus();
    } 
  });
}

const mainGitRep = document.getElementById("main-repo-button"),
mainGitRepoLink = "https://github.com/yaalese1";
if (mainGitRep){

  redirectToLink(mainGitRep, mainGitRepoLink);
}
const linkedin = document.getElementById("linkedin-button"),
linkedinLink = "https://www.linkedin.com/in/yetundealese1/"
if (linkedin){
  redirectToLink(linkedin,linkedinLink);
}

const devto = document.getElementById("dev-button"),
devtoLink = "https://dev.to/yaalese1"
if (devto){
  redirectToLink(devto,devtoLink)
}
const loom = document.getElementById("loom-button"),
loomLink = "https://www.loom.com/spaces/All-Yetundes-Workspace-20585513"

if(loom){
  redirectToLink(loom,loomLink)
}

const email = document.querySelector(".chat-button") as HTMLElement,
emailLink = "mailto:yaalese1@gmail.com"

if(email){
  redirectToLink(email,emailLink)
}

// ...

// Create the anchor element
// const mainGitRep = document.createElement("a");
// const containerElement = document.getElementById("main-repo-button"); // Replace with the actual ID of the container element
// mainGitRep.href = "https://example.com"; // Replace with your desired URL
// mainGitRep.target = "_blank"; // Set the target to "_blank"
// // mainGitRep.textContent =

// // Add the anchor element to the DOM
// if (containerElement) {
//   containerElement.appendChild(mainGitRep);
// }

// // Add a click event listener
// mainGitRep?.addEventListener("click", () => {
//   console.log("Link clicked.");
//   // You don't need to use window.open() here since the link itself has target="_blank"
// });






