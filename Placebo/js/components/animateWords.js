export const animateWord = (wordElem) => {
	const text = wordElem.dataset.text;
	text.split("").forEach((letter, ind) => {
		let span = document.createElement("span");
		if (letter === " ") {
			console.log();
			span.innerText = "\u00A0";
		} else {
			span.innerText = letter;
		}
		setTimeout(() => wordElem.append(span), ind * 100);
	});
};
