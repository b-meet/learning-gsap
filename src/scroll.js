document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	//routting
	const home = document.getElementById("back-to-home");
	home.addEventListener("click", function () {
		window.location.href = "index.html"; // Replace 'new-page.html' with your desired route
	});

	gsap.to(".box", { y: 30, yoyo: true, duration: 1, repeat: -1 });

	// gsap.to("#box-D", {
	// 	scrollTrigger: {
	// 		trigger: "#box-D",
	// 		// first keyword - for enters viewport
	// 		// second keyword - for exits viewport
	// 		// first keyword - for enters back from bottom viewport
	// 		// fourth keyword - pata nai did get it
	// 		toggleActions: "play pause reverse pause", //play pause resume reverse restart reset complete none
	// 		markers: true,
	// 		start: "top center", //first is the element itself second is the viewport
	// 		end: "bottom 20%",
	// 	},
	// 	x: 400,
	// 	rotation: 360,
	// 	duration: 1,
	// });
	gsap.to("#box-C", {
		scrollTrigger: {
			trigger: "#box-B",
			endTrigger: "#box-D",
			toggleActions: "play pause reverse pause", //play pause resume reverse restart reset complete none
			markers: true,
			start: "bottom 500px", //first is the element itself second is the viewport
			end: "top 20%",
		},
		x: 400,
		rotation: 360,
		duration: 1,
	});
});
