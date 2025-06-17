/******right sliding content*******/


document.addEventListener("DOMContentLoaded", () => {
    const coldElements = document.querySelectorAll('.cold');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
  
    coldElements.forEach(element => {
        observer.observe(element);
    });
});

/******right sliding content close*******/



/************left side scrolling content************/

document.addEventListener("DOMContentLoaded", () => {
    const coldElements = document.querySelectorAll('.recold');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reshow');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    coldElements.forEach(element => {
        observer.observe(element);
    });
});

/************left side scrolling content************/



/*********text typiing effect**************/

document.addEventListener("DOMContentLoaded", function () {
const textElement = document.querySelector(".typertext");

const texts = ["Frontend Developer","Backend Developer","Web Designer","UI/UX Designer"];
let index = 0;
let textIndex = 0;

function typeEffect() {
    if (index < texts[textIndex].length) {
        textElement.textContent += texts[textIndex].charAt(index);
        index++;
        setTimeout(typeEffect, 80); // Adjust typing speed here
    } else {
        setTimeout(() => {
            textElement.textContent = ""; // Clear the text
            index = 0; // Reset the index
            textIndex = (textIndex + 1) % texts.length; // Move to the next text
            typeEffect();
        }, 1000); // Delay before switching to the next text
    }
}


function loopEffect() {
    typeEffect();
    setTimeout(() => {
        textElement.textContent = ""; // Clear the text
        index = 0; // Reset the index
        loopEffect(); // Call the function again
    }, text.length * 100 + 1000); // Wait for typing to finish and add a delay
}
loopEffect();
});

/*********text typiing effect close**************/


/*********on scroll load content for outer bar***********/


document.addEventListener("DOMContentLoaded", () => {
    const coldElements = document.querySelectorAll('.s1-bar');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mydl');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
  
    coldElements.forEach(element => {
        observer.observe(element);
    });
});


/*********on scroll load content for outer bar***********/



/*********on scroll load content for inner bar***********/

document.addEventListener("DOMContentLoaded", () => {
    const coldElements = document.querySelectorAll('.s1-bar1');
  
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('mydl');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
  
    coldElements.forEach(element => {
        observer.observe(element);
    });
});


/*********on scroll load content for inner bar***********/





/*********rotate .circle on page refresh***********/
document.addEventListener("DOMContentLoaded", () => {
    const circle = document.querySelector('.rotate-circle');
    if (circle) {
        circle.classList.add('rotate-animation');
    }
});
/*********rotate .circle on page refresh***********/














/****************************/

