document.addEventListener('DOMContentLoaded', () => {
	const bookPagesWrapper = document.querySelector('div.spreads')
	if (!bookPagesWrapper) return

	const bookPages = bookPagesWrapper.querySelectorAll('img')
	let currentPage = 1
	bookPages.forEach((img, index) => {
		img.style.zIndex = bookPages.length - index
	})

	bookPagesWrapper.addEventListener('click', () => {
		if (currentPage >= bookPages.length) return

		bookPages[currentPage].style.zIndex = bookPages.length + currentPage
		currentPage++
	})
})
