document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	//routting
	const home = document.getElementById("back-to-home");
	home.addEventListener("click", function () {
		window.location.href = "index.html"; // Replace 'new-page.html' with your desired route
	});
	const scrollTrigBtn = document.getElementById("scroll-trigger");
	scrollTrigBtn.addEventListener("click", function () {
		window.location.href = "scroll-trigger.html"; // Replace 'new-page.html' with your desired route
	});
	const example = document.getElementById("example");
	example.addEventListener("click", function () {
		console.log("log");
		window.location.href = "wibe.html";
	});

	// images
	gsap.to("#about-us-heading", {
		x: 200,
		scrollTrigger: {
			trigger: "#right-img",
			scrub: 1,
			start: "top 80%",
		},
	});

	gsap.to("#right-img", {
		y: 250,
		scrollTrigger: {
			trigger: "#right-img",
			scrub: 1,
			start: "top 80%",
		},
	});

	gsap.to("#left-img", {
		y: -200,
		scrollTrigger: {
			trigger: "#right-img",
			scrub: 1,
			start: "top 80%",
		},
	});

	gsap.to("#desc-wrapper", {
		y: 300,
		scrollTrigger: {
			trigger: "#right-img",
			scrub: 1,
			start: "bottom 75%",
		},
	});
});
