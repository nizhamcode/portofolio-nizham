/* =====================================================
   NIZHAMCODE PORTFOLIO v1.0
   Author : Abdullah Nizham Alfakhri
   ===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("🚀 Nizham Portfolio v1.0 Loaded");

    // ===========================
    // Smooth Scroll
    // ===========================

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function(e){

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if(target){

                target.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    // ===========================
    // Navbar Shadow
    // ===========================

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 60){

            header.style.boxShadow="0 10px 30px rgba(0,0,0,.15)";

        }else{

            header.style.boxShadow="0 5px 15px rgba(0,0,0,.08)";

        }

    });

    // ===========================
    // Reveal Animation
    // ===========================

    const sections=document.querySelectorAll("section");

    const reveal=()=>{

        sections.forEach(section=>{

            const top=section.getBoundingClientRect().top;

            const trigger=window.innerHeight-120;

            if(top<trigger){

                section.classList.add("show");

            }

        });

    }

    window.addEventListener("scroll",reveal);

    reveal();

    // ===========================
    // Footer Year
    // ===========================

    const footer=document.querySelector("footer p");

    if(footer){

        footer.innerHTML=`© ${new Date().getFullYear()} NizhamCode • Built with ❤️`;

    }

});

// ===========================
// Back To Top Button
// ===========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.id="topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ===========================
// Button Click Animation
// ===========================

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("btn")){

        e.target.style.transform="scale(.95)";

        setTimeout(()=>{

            e.target.style.transform="";

        },150);

    }

});