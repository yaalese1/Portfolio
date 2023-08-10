import './style.css'
// import './about.ts'

// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = 

const mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
    if (mediaButton != null) //used if statement that serves as a type guard fix error , this chest to see if media button is null and undefined
        mediaButton.onclick = function () {
        "use strict";
        mainListDiv?.classList.toggle("show_list");
        mediaButton?.classList.toggle("active");
// used using optional chaining to get rid of obj possibly null error     
        }

const links = document.querySelectorAll(".a");

  for (const link of links) {
  link.addEventListener("click", clickHandler);
    }

function clickHandler(e) {
  e.preventDefault();
  const href: string = this.getAttribute("href");

  const offsetTop = document.querySelector(href)?.offsetTop;

    scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
const mainGitRep = document.getElementById("main-repo-button")
const mainGitRepoLink ="https://github.com/yaalese1"
function redirectToMainRepo(){
  let newWindow = window.open(mainGitRepoLink, "_blank")
  if(newWindow)
    newWindow.focus()
  

  // mainGitRep?.addEventListener("click",() => window.location = "https://github.com/yaalese1");
  console.log("yaya")
  
}
mainGitRep?.addEventListener("click", redirectToMainRepo);

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






