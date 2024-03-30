new SimpleLightbox({ elements: '.container-galerie a' });
new SimpleLightbox({ elements: '.serv-galerie a' })

AOS.init({
    duration: 900,
    offset: 100,
    once: true
});

window.addEventListener("load", function() {
    var loadingScreen = document.getElementById("loading-screen");
    setTimeout(function () {
        loadingScreen.style.display = "none";
    }, 1800);
});

function mobile() {
    var x = document.getElementById("nav");

    if (x.className === "navbar") {
        x.className = "navbar mobile";
    } else {
        x.className = "navbar";
    }
}

var menu = document.querySelector(".menu")
var header = document.querySelector(".menu-nav")


menu.addEventListener("click", function () {
    header.classList.add("nav-mobile")
})

function onload() {
    getYear();
    console.log('page loaded');
    // setScrollListener();
}

function getYear() {
    var d = new Date(),
        date = d.getDate(),
        mon = d.getMonth(),
        yr = d.getFullYear();
    // var days = ["Duminică", "Luni", "Marți", "Miercuri", "Joi", "Vineri", "Sâmbătă"];
    // document.getElementById("year").innerHTML = ((date < 10) ? '0' + date : date) + "/" +
    document.getElementById("year").innerHTML = ('0' + date).slice(-2) + "/" +
        // (((mon + 1) < 10) ? '0' + (mon + 1) : (mon + 1)) + "/" + yr + " " + days[d.getDay()];
        ('0' + (mon + 1)).slice(-2) + "/" + yr;
}