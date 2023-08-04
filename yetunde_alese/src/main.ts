import './style.css'
// import './about.ts'

// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = 

var mainListDiv = document.getElementById("mainListDiv"),
    mediaButton = document.getElementById("mediaButton");
    if (mediaButton != null) //used if statement that serves as a type guard fix error , this chest to see if media button is null and undefined
        mediaButton.onclick = function () {
        "use strict";
        mainListDiv?.classList.toggle("show_list");
        mediaButton?.classList.toggle("active");
// used using optional chaining to get rid of obj possibly null error     
        }


        const links = document.querySelectorAll(".page-header ul a");
        for (const link of links) {
          link.addEventListener("click", clickHandler);
        }
        function clickHandler(e) {
          e.preventDefault();
          const href = this.getAttribute("href");
          console.log(href);
          const offsetTop = document.querySelector(href).offsetTop;
          scroll({
            top: offsetTop,
            behavior: "smooth"
          });
        }




