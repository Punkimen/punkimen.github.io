"use strict";
// tabs init
document.addEventListener("DOMContentLoaded", () => {
	new ItcTabs(".tabs");

	const createLi = (str, parent) => {
		const li = document.createElement("li");
		li.className = "characteristics-block__item";
		li.innerHTML = str;
		parent.appendChild(li);
	};

	const forms = document.querySelectorAll("form");
	forms.forEach((form) => {
		form.addEventListener("submit", (e) => {
			e.preventDefault();
			const input = form.querySelector("input");
			if (input.value.trim() === "") {
				input.parentElement.setAttribute("data-error", "Заполните поле");
				input.parentElement.classList.add("error");
			} else {
				const itemsParent = form
					.closest(".characteristics__body-item")
					.querySelector(".characteristics-block__items");
				createLi(input.value, itemsParent);
			}
		});
	});
});

// tabs init end
