document.addEventListener("DOMContentLoaded", () => {
	gsap.registerPlugin(ScrollTrigger);
	//routting
	const home = document.getElementById("back-to-home");
	home.addEventListener("click", function () {
		window.location.href = "index.html";
	});
	const scrollTrigBtn = document.getElementById("scroll-trigger");
	scrollTrigBtn.addEventListener("click", function () {
		window.location.href = "scroll-trigger.html";
	});
	const example = document.getElementById("example");
	example.addEventListener("click", function () {
		console.log("log");
		window.location.href = "wibe.html";
	});

	//about timeline
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

	//new collection
	const newCollectionImg =
		document.getElementsByClassName("new-collection-img");
	const newCollectionImgContainer = document.querySelector(
		"#new-collection-img-container"
	);

	const newCollectionTimeline = gsap.timeline();
	newCollectionTimeline.fromTo(
		"#new-collection-heading",
		{
			y: -75,
			x: 100,
		},
		{
			x: 100,
			y: 100,
			scrollTrigger: {
				trigger: "#new-collection-heading",
				scrub: 2,
				start: "top 90%",
				end: "+=200px top",
				markers: true,
			},
		}
	);

	newCollectionTimeline.to("#new-collection-section", {
		scrollTrigger: {
			trigger: "#new-collection-section",
			pin: true,
			start: "top",
			end: "bottom top",
		},
		x: 0,
	});

	Array.from(newCollectionImg).map((item) => {
		newCollectionTimeline.fromTo(
			item,
			{
				xPercent: 75,
				filter: "grayscale(100%)",
			},
			{
				xPercent: () =>
					-newCollectionImgContainer.scrollWidth +
					newCollectionImgContainer.clientWidth +
					550,
				scrollTrigger: {
					tigger: "#new-collection-section",
					scrub: 2,
					start: "50% top",
				},
				filter: "grayscale(0%)",
			}
		);
	});

	gsap.to("#clothing-image-container", {
		y: 700,
	});
});
