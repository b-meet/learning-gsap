document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	//routting
	const home = document.getElementById("back-to-home");
	home.addEventListener("click", function () {
		window.location.href = "index.html"; // Replace 'new-page.html' with your desired route
	});

	gsap.to(".box", { y: 30, yoyo: true, duration: 1, repeat: -1 });

	gsap.to("#box-D", {
		scrollTrigger: "#box-D",
		x: 300,
		rotation: 360,
		duration: 2,
	});
});
