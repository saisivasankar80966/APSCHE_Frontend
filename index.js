let dateELement = document.querySelector(".date");
let date = new Date();
dateELement.textContent = (date.getDate() + "-" + parseInt(date.getMonth() + 1) + "-" + date.getFullYear());



const categories = document.querySelectorAll(".category");
const items = document.querySelectorAll(".item");

categories.forEach((category) => {
    category.addEventListener("click", () => {
        const type = category.getAttribute("data-type");
        categories.forEach((c) => c.classList.remove("active"));
        category.classList.add("active");

        items.forEach((item) => {
            if (item.getAttribute("data-type") === type) {
                item.style.display = "block";
                item.classList.add("animation");
            } else {
                item.style.display = "none";
            }
        });
    });
});

categories[0].click();


const element = document.querySelector('.container');

const mediaQuery = window.matchMedia('(max-width: 810px)');

function handleScreenSizeChange(e) {
    if (e.matches) {
        element.classList.remove('container');
    } else {
        element.classList.add('container');
    }
}

handleScreenSizeChange(mediaQuery);
mediaQuery.addListener(handleScreenSizeChange);