document.addEventListener("DOMContentLoaded", function () {
	gsap.registerPlugin(ScrollTrigger);
	//routing
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
		window.location.href = "wibe.html"; // Replace 'new-page.html' with your desired route
	});

	// NUMBER ONE
	gsap.from(".square", { x: "random(-1500, -2000)" });
	gsap.to(".square", {
		x: 0,
		duration: 2,
		rotate: 360,
		y: 0,
		ease: "back.out",
		stagger: 0.2,
	});
	gsap.from(".description-wrapper", { x: 0, y: 50, opacity: 0, delay: 1.8 });
	gsap.to(".description-wrapper", {
		x: 0,
		y: 0,
		opacity: 1,
		duration: 2,
		delay: 2,
		ease: "power.out",
		stagger: 0.3,
	});
	gsap.from(".circle", {
		x: 0,
		y: "random(-200,200)",
		opacity: 0,
		delay: 1.8,
	});
	gsap.to(".circle", {
		x: 0,
		y: 0,
		duration: 0.75,
		opacity: 1,
		delay: 1.8,
		ease: "none",
		stagger: 0.1,
	});
	//NUMBER TWO EASE
	// const container = document.querySelector(".container");
	const ballContainer = document.querySelector(".ball-container");
	const hexColorDigits = "0123456789abcdef";
	function createBall() {
		let generatedColor = "#";
		for (let i = 0; i < 6; i++) {
			let randomSelect = Math.floor(Math.random() * 16);
			generatedColor += hexColorDigits[randomSelect];
		}
		const newBall = document.createElement("div");
		newBall.className = "ball";
		newBall.style.left =
			Math.random() * (ballContainer.offsetWidth - 30) + "px";
		newBall.style.top = Math.random() * 0 + 10 + "px";
		newBall.style.backgroundColor = generatedColor + "aa";
		ballContainer.appendChild(newBall);
	}
	for (let i = 0; i < 80; i++) {
		createBall();
	}
	// const dropTheBalls = () => {
	// 	gsap.fromTo(
	// 		".ball",
	// 		{ x: 0, y: 0 },
	// 		{
	// 			x: 0,
	// 			y: 620,
	// 			scrollTrigger: {
	// 				trigger: ".balls-container",
	// 				// endTrigger: "#box-D",
	// 				// toggleActions: "play pause reverse pause",
	// 				markers: true,
	// 				start: "top center",
	// 				// end: "+=150 200", // 150px from start|
	// 				// // scrub: true,
	// 				// scrub: 2, //adds on smoothness
	// 			},
	// 			ease: "bounce.out",
	// 			yoyo: true,
	// 			duration: 3,
	// 			stagger: 0.04,
	// 		}
	// 	);
	// };
	gsap.fromTo(
		".ball",
		{ x: 0, y: 0 },
		{
			x: 0,
			y: 650,
			scrollTrigger: {
				trigger: "#balls-container",
				start: "top center",
				end: "bottom 200",
				scrub: 2,
			},
			ease: "bounce.out",
			yoyo: true,
			duration: 3,
			stagger: 0.01,
		}
	);
	// container.addEventListener("click", () => {
	// 	dropTheBalls();
	// });
	//NUMBER THREE
	const squares = document.getElementsByClassName("squr");
	Array.from(squares).map((item) =>
		gsap.to(".squr", {
			y: -450,
			opacity: 0,
			scrollTrigger: {
				trigger: ".squr",
				start: "top 75%",
				end: "bottom 50%",
				scrub: "0.5",
			},
			stagger: 0.5,
			ease: "steps(16)",
		})
	);

	const text = document.getElementsByClassName("draped-text");
	Array.from(text).map((item) =>
		gsap.fromTo(
			".draped-text",
			{ opacity: 0 },
			{
				opacity: 1,
				scrollTrigger: {
					trigger: ".draped-text",
					start: "center 80%",
					end: "+=200 65%",
					scrub: true,
				},
				stagger: 0.5,
				ease: `power1.out`,
			}
		)
	);
	// Array.from(squares).map((item) =>
	// 	item.addEventListener("click", () => {
	// 		gsap.to(".squr", {
	// 			y: -200,
	// 			opacity: 0,
	// 			stagger: 0.1,
	// 			ease: `power1.out`,
	// 		});
	// 	})
	// );
	//NUMBER FOUR STAGGERS
	const staggerContainer = document.getElementById("staggerContainer");
	for (let i = 0; i < 65; i++) {
		const sqr = document.createElement("div");
		sqr.classList.add(
			"h-[80px]",
			"w-[80px]",
			"bg-blue-500",
			"rounded-lg",
			"stagger-sqr-items"
		);
		staggerContainer.append(sqr);
	}
	staggerContainer.addEventListener("click", () => {
		gsap.to(".stagger-sqr-items", {
			scale: 0.05,
			y: 60,
			yoyo: true,
			repeat: -1,
			rotation: 25,
			stagger: {
				amount: 1.5,
				ease: "power.in",
				// each: 1, time between each sub-tween whereas amount is total which will be split between each subtween
				from: "start", //index, array ([0.5, 0.5] ~ center of the axis and so on) or key words ("start", "center", "edges", "random", or "end")
				grid: "auto",
				yoyo: true,
				repeat: -1,
				repeatDelay: 1,
				axis: null,
			},
			duration: 1,
			ease: "power1.inOut",
		});
	});
	//NUMBER FIVE BIG SHIT TIMELINES!!!!!
	const gsapTimeline = gsap.timeline({
		repeat: -1,
		yoyo: true,
		repeatDelay: 0.5,
		defaults: { stagger: 0.2 }, //will be applied to all tweens in the time line
	});
	gsapTimeline
		.to(".sqrs-200", { x: 300 }, 1) //ABSOLUTE TIME after 1 sec of starting a timeline
		.to(".sqrs-400", { x: 300 }, "+=1") //GAP: adding a 1sec gap between this and previous tween
		.to(".sqrs-600", { x: 300 }, "-=1"); //OVERLAP: to go behing in timeline refers to previous rween
	//NUMBER SIX TIMELINE CONTROLS !!

	const gsapTween = gsap.fromTo(
		".host-obj",
		{
			x: -400,
			repeat: -1,
			yoyo: true,
			duration: 1,
		},
		{
			x: 400,
			repeat: -1,
			yoyo: true,
			duration: 1,
			onComplete: () => alert("completed"),
			// onStart: () =>
			// 	alert("time control for tweens animation will start"),
			// onUpdate: () => alert("animstion is updating"),
			// onRepeat: () => alert("repeatation started!!"),
			// onReverseComplete: () => alert("reverse completed"),
		}
	);

	const pause = document.querySelector("#pause");
	const play = document.querySelector("#play");
	const doubleSpeed = document.querySelector("#doubleSpeed");
	const slowDown = document.querySelector("#slowDown");
	const reverse = document.querySelector("#reverse");
	const normalSpeed = document.querySelector("#normalSpeed");
	const seek = document.querySelector("#seek");
	const progress = document.querySelector("#progress");
	const kill = document.querySelector("#kill");

	pause.addEventListener("click", () => {
		gsapTween.pause();
	});
	play.addEventListener("click", () => {
		gsapTween.resume();
	});
	doubleSpeed.addEventListener("click", () => {
		gsapTween.timeScale(2);
	});
	normalSpeed.addEventListener("click", () => {
		gsapTween.timeScale(1);
	});
	slowDown.addEventListener("click", () => {
		gsapTween.timeScale(0.25);
	});
	seek.addEventListener("click", () => {
		gsapTween.seek(0.5);
	});
	reverse.addEventListener("click", () => {
		gsapTween.reverse(); // (always goes back TO THE BEGINNING)
	});
	progress.addEventListener("click", () => {
		gsapTween.progress(0.25);
	});
	kill.addEventListener("click", () => {
		gsapTween.kill();
	});
});
