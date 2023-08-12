import './style.css'


const mainListDiv = document.getElementById("mainListDiv"),
 mediaButton = document.getElementById("mediaButton")
    if (mediaButton != null) //used if statement that serves as a type guard fix error , this chest to see if media button is null and undefined
        mediaButton.onclick = function () {
        "use strict";
        mainListDiv?.classList.toggle("show_list")
        mediaButton?.classList.toggle("active")
// used using optional chaining to get rid of obj possibly null error     
        }
const links = document.querySelectorAll(".a")
for (const link of links) {
  link.addEventListener("click", clickHandler)
    }
function clickHandler(e) {
  e.preventDefault();
const href: string = this.getAttribute("href"),
offsetTop = document.querySelector(href)?.offsetTop;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


function redirectToLink(element:HTMLElement, url:string){
  let newWindow = window.open(url , "_blank")
    if(newWindow)
      newWindow.focus()
  // mainGitRep?.addEventListener("click",() => window.location = "https://github.com/yaalese1");
  // console.log("yaya")
  
}
const mainGitRep = document.getElementById("main-repo-button"),
mainGitRepoLink ="https://github.com/yaalese1"

mainGitRep?.addEventListener("click", () => redirectToLink(mainGitRep,mainGitRepoLink))

const linkedin = document.getElementById("linkedin-button"),
linkedinLink = "https://www.linkedin.com/in/yetundealese1/"

linkedin?.addEventListener("click",()=> redirectToLink(linkedin,linkedinLink))

const devto = document.getElementById("dev-button"),
devtoLink = "https://dev.to/yaalese1"

devto?.addEventListener("click", () => redirectToLink(devto,devtoLink))

const loom = document.getElementById("loom-button"),
loomLink = "https://www.loom.com/spaces/All-Yetundes-Workspace-20585513"

loom?.addEventListener("click",() => redirectToLink(loom,loomLink))




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






