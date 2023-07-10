export const showMarker = (progress, markers) => {
    if (progress > 0 && progress < 1) {
        if (progress >= 0) {
            markers[0].classList.add('show')
            markers[2].classList.add('show')
            markers[3].classList.add('show')
        } else {
            markers[0].classList.remove('show')
            markers[2].classList.remove('show')
            markers[3].classList.remove('show')
        }
        if (progress >= 0.25) {
            markers[3].classList.add('show')
        } else {
            markers[3].classList.remove('show')
        }
        if (progress >= 0.30) {
            markers[4].classList.add('show')
        } else {
            markers[4].classList.remove('show')
        }
        if (progress >= 0.35) {
            markers[5].classList.add('show')
        } else {
            markers[5].classList.remove('show')
        }
        if (progress >= 0.44) {
            markers[6].classList.add('show')
        } else {
            markers[6].classList.remove('show')
        }
        if (progress >= 0.50) {
            markers[7].classList.add('show')
        } else {
            markers[7].classList.remove('show')
        }
        if (progress >= 0.63) {
            markers[8].classList.add('show')
        } else {
            markers[8].classList.remove('show')
        }
    }
}
