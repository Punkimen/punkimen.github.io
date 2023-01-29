import {Fancybox} from "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.esm.js";

document.addEventListener('DOMContentLoaded', function(){
	Fancybox.bind('[data-fancybox="gallery"]', {
		Image: {
			zoom: false,
		},
	});
})
