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

	const aboutTimeline = gsap.timeline({
		scrollTrigger: {
			trigger: "#right-img",
			scrub: 1,
			start: "top bottom",
		},
	});
	aboutTimeline.to("#about-us-heading", {
		x: 200,
	});
	aboutTimeline.to(
		"#right-img",
		{
			y: 200,
		},
		"<"
	);
	aboutTimeline.to(
		"#left-img",
		{
			y: -500,
		},
		"<"
	);
	aboutTimeline.to(
		"#desc-wrapper",
		{
			y: 200,
		},
		"<"
	);

	gsap.to("#new-collection-section", {
		scrollTrigger: {
			trigger: "#new-collection-section",
			pin: true,
			start: "top",
		},
		x: 0,
	});

	const newCollectionImg =
		document.getElementsByClassName("new-collection-img");

	const newCollectionImgContainer = document.querySelector(
		"#new-collection-img-container"
	);
	console.log(Array.from(newCollectionImg), "newCollectionImg");
	Array.from(newCollectionImg).map((item) => {
		gsap.to(item, {
			xPercent: () =>
				-newCollectionImgContainer.scrollWidth +
				newCollectionImgContainer.clientWidth +
				550,
			scrollTrigger: {
				tigger: "#new-collection-section",
				scrub: 1,
				start: "50% top",
			},
		});
	});

	gsap.fromTo(
		"#new-collection",
		{
			y: -50,
			x: 100,
		},
		{
			x: 100,
			y: 100,
			scrollTrigger: {
				trigger: "#new-collection",
				scrub: 1,
				start: "top 95%",
			},
		}
	);
});
