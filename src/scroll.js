document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	//routting
	const home = document.getElementById("back-to-home");
	home.addEventListener("click", function () {
		window.location.href = "index.html"; // Replace 'new-page.html' with your desired route
	});

	gsap.to(".box", { y: 30, yoyo: true, duration: 1, repeat: -1 });

	gsap.to("#box-D", {
		scrollTrigger: {
			trigger: "#box-D",
			// first keyword - for enters viewport
			// second keyword - for exits viewport
			// first keyword - for enters back from bottom viewport
			// fourth keyword - pata nai did get it
			toggleActions: "play pause reverse pause", //play pause resume reverse restart reset complete none
		},
		x: 400,
		rotation: 360,
		duration: 1,
	});
});
