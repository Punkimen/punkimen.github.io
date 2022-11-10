class ItcTabs {
	constructor(target, config) {
		const defaultConfig = {};
		this._config = Object.assign(defaultConfig, config);
		this._elTabs =
			typeof target === "string" ? document.querySelector(target) : target;
		this._elButtons = this._elTabs.querySelectorAll(".tab");
		this._elPanes = this._elTabs.querySelectorAll(".tabs__body-item");
		this._eventShow = new Event("tab.itc.change");
		this._init();
		this._events();
	}
	_init() {
		this._elTabs.setAttribute("role", "tablist");
		this._elButtons.forEach((el, index) => {
			el.dataset.index = index;
			el.setAttribute("role", "tab");
			this._elPanes[index].setAttribute("role", "tabpanel");
		});
	}
	show(elLinkTarget) {
		const elPaneTarget = this._elPanes[elLinkTarget.dataset.index];
		const elLinkActive = this._elTabs.querySelector(".tab_active");
		const elPaneShow = this._elTabs.querySelector(".tabs__body-item_show");
		if (elLinkTarget === elLinkActive) {
			return;
		}
		elLinkActive ? elLinkActive.classList.remove("tab_active") : null;
		elPaneShow ? elPaneShow.classList.remove("tabs__body-item_show") : null;
		elLinkTarget.classList.add("tab_active");
		elPaneTarget.classList.add("tabs__body-item_show");
		this._elTabs.dispatchEvent(this._eventShow);
		elLinkTarget.focus();
	}
	showByIndex(index) {
		const elLinkTarget = this._elButtons[index];
		elLinkTarget ? this.show(elLinkTarget) : null;
	}
	_events() {
		this._elTabs.addEventListener("click", (e) => {
			const target = e.target.closest(".tab");
			if (target) {
				e.preventDefault();
				this.show(target);
			}
		});
	}
}
