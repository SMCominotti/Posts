const headerEl = document.querySelector('.header')

const isScrolling = () => {
	const windowPosition = window.scrollY > 50
	headerEl.classList.toggle('header--active', windowPosition)
}

window.addEventListener('scroll', isScrolling)