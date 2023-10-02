import {
	bodyCols,
	bodyRow,
	headerBtn,
	headerCols,
	headerLogo,
	headerNav,
	headerRow,
	mobMenuWrapper, referralColPartner, referralColPersonal, referralLabelPartner, referralLabelPersonal,
	referralTable, referralValuePartners, referralValuePersonal
} from "./vars.js";

export const adaptiveHeader = (windowWidth) => {
	if (windowWidth <= 992 && !headerNav.classList.contains('mobile')) {
		headerNav.classList.add('mobile')
		mobMenuWrapper.append(headerNav, headerBtn)
	} else if (headerNav.classList.contains('mobile') && windowWidth > 992) {
		headerNav.classList.remove('mobile')
		headerLogo.after(headerNav, headerBtn)
	} else {
		return null
	}
}

export const adaptiveSupport = (windowWidth) => {
	if (windowWidth <= 768 && !headerRow.classList.contains('mobile')) {
		headerRow.classList.add('mobile');
		bodyCols.forEach((el, index) => {
			headerCols[index].after(el)
		})
	} else if (headerRow.classList.contains('mobile') && windowWidth > 768) {
		headerRow.classList.remove('mobile');
		bodyCols.forEach((el) => {
			bodyRow.append(el);
		})
	} else {
		return null;
	}
}

export const adaptiveReferral = (windowWidth) => {
	if (windowWidth <= 568 && !referralTable.classList.contains('mobile')) {
		referralTable.classList.add('mobile');
		[...referralValuePersonal].reverse().forEach((el, index) => {
			referralLabelPersonal.after(el)
		});
		[...referralValuePartners].reverse().forEach((el, index) => {
			referralLabelPartner.after(el)
		})
	} else if (referralTable.classList.contains('mobile') && windowWidth > 768) {
		referralTable.classList.remove('mobile');
		referralValuePersonal.forEach((el, index) => {
			referralColPersonal[index].append(el)
		})
		referralValuePartners.forEach((el, index) => {

			referralColPartner[index].append(el)
		})
	} else {
		return null;
	}
}
