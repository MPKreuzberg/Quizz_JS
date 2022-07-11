const prompt = require("prompt-sync")({ sigint: true });

const playAudioFile = async (fileName) => {
	const player = require("play-sound")((opts = {}));
	player.play(fileName, function (err) {
		if (err) throw err;
	});
};
console.log(playAudioFile("Beginning.wav"));

const playAudioFile1 = async (fileName) => {
	const player = require("play-sound")((opts = {}));
	player.play(fileName, function (err) {
		if (err) throw err;
	});
};

function playAudioFile2(fileName) {
	const player = require("play-sound")((opts = {}));
	player.play(fileName, function (err) {
		if (err) throw err;
	});
}

console.log(
	"\n" +
		"*******************" +
		"\n" +
		"Welcome to the Quiz!" +
		"\n" +
		"*******************" +
		"\n" +
		"Answer the questions with typing the letter from the beginning of answer and then hit `Enter`" +
		"\n" +
		"********************************************************************************************" +
		"\n"
);
const questions = [
	{
		question: "Is this the best quiz ever?",
		answers: [
			{ a: "yes" },
			{ b: "da" },
			{ c: "ja Vohl" },
			{ d: "Sharks Rule" },
		],
		correct: "d",
	},
	{
		question: "When Columbus discovered America?",
		answers: [{ a: "1492" }, { b: "2015" }, { c: "1863" }, { d: "1634" }],
		correct: "a",
	},
	{
		question: "Charles Babbage(1791-1871) created first mechanical computer?",
		answers: [{ a: "False" }, { b: "True" }],
		correct: "b",
	},
	{
		question: "Do you think the `Quiz` could be better?",
		answers: [{ a: "NO" }, { b: "HELL NO" }, { c: "Nope" }, { d: "Nah" }],
		correct: "d",
	},
];
let score = 0;
let calcScore = (answer, idx) => {
	if (answer === questions[idx].correct) {
		console.log(
			"\x1b[36m%s\x1b[0m",

			"\n" + "Correct! + " + 1 + " point" + "\n"
		);
		score++;
		playAudioFile1("Oh Yeah.wav");
	} else {
		console.log(
			`\x1b[31m%s\x1b[0m`,
			"\n" +
				"Wrong!" +
				" The correct answer was: " +
				questions[idx].correct +
				"\n"
		);
		playAudioFile2("Naaah!.wav");
	}
};

function setOptions(idx) {
	return questions[idx].answers.map((answer) => {
		return Object.keys(answer)[0] + ": " + answer[Object.keys(answer)[0]];
	});
}
function askQuestion(idx) {
	const text = questions[idx].question + "\n" + setOptions(idx).join("\n");
	console.log(text);
	const answer = prompt("Your answer: ");
	calcScore(answer, idx);
	// console.clear()
}

const quiz = () => {
	for (let i = 0; i < questions.length; i++) {
		askQuestion(i);
	}
	if (score === questions.length) {
		console.log("\n" + "You got all the questions right!" + "\n");
		playAudioFile2("Cheer on the end.wav");
	} else {
		console.log("Fail !!!" + "\n");
		playAudioFile2("Boo on the end.wav");
	}
	console.log(
		`You got ${score} out of ${questions.length} answers correct and you collected ${score} points !` +
			"\n"
	);
	console.log("Thanks for playing!" + "\n" + "*******************" + "\n");
};
quiz();

//My old solution "NOT working":

// const prompt = require("prompt-sync")({ sigint: true });

// const questions = [
// 	{
// 		question: "Is this the best quiz ever?",
// 		answers: [
// 			{ a: "yes" },
// 			{ b: "Yes" },
// 			{ c: "ja Voll" },
// 			{ d: "Sloths Rule" },
// 		],
// 		correct: "d",
// 	},
// 	{
// 		question: "When Columbus discovered America?",
// 		answers: [{ a: "1492" },
//               { b: "2015" },
//               { c: "1863" },
//               { d: "1634" }],
// 		correct: "a",
// 	},function setOptions(idx) {
// 	return questions[idx].answers.map((answer) => {
// 		return Object.keys(answer)[0] + ": " + answer[Object.keys(answer)[0]];
// 	});
// }
// 	{
// 		question: "Do you think it could be better?",
// 		answers: [{ a: "NO" },
//               { b: "HELL NO" },
//               { c: "nope" },
//               { d: "nah" }],
// 		correct: "a",
// 	},
// ];

// const quiz = () => {
// 	let score = 0;
// 	let question = 0;
// 	const askQuestion = (i) => {
// 		const options = questions[i].answers.map((answer) => {
// 			return Object.keys(answer)[0] + ": " + answer[Object.keys(answer)[0]];
// 		});

// 		const answer = prompt(
// 			questions[i].question + "\n" + options.join("\n") + "\n" + "Your answer: "
// 		);
// 		if (answer === questions[i].correct) {
// 			score++;
// 		}
// 		question++;
// 		if (question >= questions.length) {
// 			console.log(`You got ${score} out of ${questions.length} correct!`);
// 			return;
// 		}
// 		askQuestion(question);
// 	};
// 	askQuestion(question);
// };

// quiz();
