document.querySelector(".menu-box").addEventListener("click", function() {
	document.querySelector(".nav__links-box").classList.toggle("display-nav");
	document.querySelector("html").classList.toggle("menu-toggle");
	// document.querySelector("header").classList.toggle("blur");
	document.querySelectorAll("body > *:not(nav)").forEach(function(section) {
		section.classList.toggle("blur");
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