document.addEventListener("DOMContentLoaded", function () {
	// NUMBER ONE
	// gsap.from(".square", { x: "random(-1500, -2000)" });
	// gsap.to(".square", {
	// 	x: 0,
	// 	duration: 2,
	// 	rotate: 360,
	// 	y: 0,
	// 	ease: "back.out",
	// 	stagger: 0.2,
	// });
	// gsap.from(".description-wrapper", { x: 0, y: 50, opacity: 0, delay: 1.8 });
	// gsap.to(".description-wrapper", {
	// 	x: 0,
	// 	y: 0,
	// 	opacity: 1,
	// 	duration: 2,
	// 	delay: 2,
	// 	ease: "power.out",
	// 	stagger: 0.3,
	// });
	// gsap.from(".circle", {
	// 	x: 0,
	// 	y: "random(-300,300)",
	// 	opacity: 0,
	// 	delay: 1.8,
	// });
	// gsap.to(".circle", {
	// 	x: 0,
	// 	y: 0,
	// 	duration: 1.5,
	// 	opacity: 1,
	// 	delay: 1.8,
	// 	ease: "back.inout",
	// 	stagger: 0.3,
	// });
	//NUMBER TWO EASE
	// const container = document.querySelector(".container");
	// const ballContainer = document.querySelector(".ball-container");
	// const hexColorDigits = "0123456789abcdef";
	// function createBall() {
	// 	let generatedColor = "#";
	// 	for (let i = 0; i < 6; i++) {
	// 		let randomSelect = Math.floor(Math.random() * 16);
	// 		generatedColor += hexColorDigits[randomSelect];
	// 	}
	// 	const newBall = document.createElement("div");
	// 	newBall.className = "ball";
	// 	newBall.style.left =
	// 		Math.random() * (ballContainer.offsetWidth - 30) + "px";
	// 	newBall.style.top = Math.random() * 0 + 20 + "px";
	// 	newBall.style.backgroundColor = generatedColor + "aa";
	// 	ballContainer.appendChild(newBall);
	// }
	// for (let i = 0; i < 20; i++) {
	// 	createBall();
	// }
	// const dropTheBalls = () => {
	// 	gsap.fromTo(
	// 		".ball",
	// 		{ x: 0, y: 0 },
	// 		{
	// 			x: 0,
	// 			y: 620,
	// 			ease: "bounce.out",
	// 			yoyo: true,
	// 			duration: 3,
	// 			stagger: 0.04,
	// 		}
	// 	);
	// };
	// container.addEventListener("click", () => {
	// 	dropTheBalls();
	// });
	//NUMBER THREE
	// const squares = document.getElementsByClassName("square");
	// Array.from(squares).map((item) =>
	// 	item.addEventListener("click", () => {
	// 		gsap.to(".square", {
	// 			y: -200,
	// 			opacity: 0,
	// 			stagger: 0.1,
	// 			ease: `power1.out`,
	// 		});
	// 	})
	// );

	//NUMBER FOUR STAGGERS
	const container = document.getElementById("container");

	for (let i = 0; i < 65; i++) {
		const sqr = document.createElement("div");
		sqr.classList.add("h-[80px]", "w-[80px]", "bg-slate-600", "sqr-items");
		container.append(sqr);
	}

	container.addEventListener("click", () => {
		gsap.to(".sqr-items", {
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
				axis: null,
			},
			duration: 1,
			ease: "power1.inOut",
		});
	});
});
