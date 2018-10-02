document.querySelector(".menu-box").addEventListener("click", function() {
	document.querySelector(".nav__links-box").classList.toggle("display-nav");
	document.querySelector("html").classList.toggle("menu-toggle");
	document.querySelectorAll("body > *:not(nav)").forEach(function(section) {
		section.classList.toggle("blur");
	});
});

document.querySelector(".discover").addEventListener("click", function(e) {
	e.preventDefault();

	document.querySelector(this.getAttribute("href")).scrollIntoView({
		behavior: "smooth",
		block: "start"
	});
});

var navLinks = document.querySelectorAll(".nav__links li a");
for(var i=0; i < navLinks.length; i++) {
	var link = navLinks[i];
	link.addEventListener("click", function() {
		for(var j=0; j < navLinks.length; j++) {
			navLinks[j].classList.remove("link-hover");
		}
		this.classList.add("link-hover");
	});
};

var currentY = 0;
window.addEventListener("scroll", function() {
	if(window.scrollY > currentY && window.scrollY >= window.innerHeight) {
		document.querySelector("nav").classList.add("nav-sticky");
	} else if(window.scrollY < currentY && window.scrollY <= window.innerHeight) {
		document.querySelector("nav").classList.remove("nav-sticky");
	}
	currentY = window.scrollY;
})