document.addEventListener('DOMContentLoaded', () => {
	function adjustTextareaHeight(textarea) {
		textarea.style.height = 'auto'
		textarea.style.height = `${textarea.scrollHeight}px`
	}
	function syncQuestionnaireWidthsAndHeights() {
		const items = document.querySelectorAll('.questionnaire_item')
		let maxWidth = 0

		items.forEach(item => {
			item.style.width = 'auto'
			item.style.height = 'auto'

			const link = item.querySelector('[class*="questionnaire_link_"]')
			link.style.width = 'auto'
			link.style.height = 'auto'
			const textarea = item.querySelector('.questionnaire_p')
			textarea.style.width = 'auto'
			textarea.style.height = 'auto'
			adjustTextareaHeight(textarea)
		})

		items.forEach(item => {
			const width = item.getBoundingClientRect().width
			if (width > maxWidth) {
				maxWidth = width
			}
		})

		items.forEach(item => {
			item.style.width = `${maxWidth}px`
			const link = item.querySelector('[class*="questionnaire_link_"]')
			link.style.width = '100%'
			const textarea = item.querySelector('.questionnaire_p')
			textarea.style.width = '100%'

			adjustTextareaHeight(textarea)
			const textareaHeight = textarea.getBoundingClientRect().height
			link.style.height = `${textareaHeight}px`
			item.style.height = `${
				textareaHeight +
				(0.3 * window.innerWidth) / 100 +
				(0.8 * window.innerHeight) / 100
			}px`
		})
	}
	window.addEventListener('load', syncQuestionnaireWidthsAndHeights)
	document.querySelectorAll('.questionnaire_p').forEach(textarea => {
		textarea.addEventListener('input', syncQuestionnaireWidthsAndHeights)
	})
	window.addEventListener('resize', syncQuestionnaireWidthsAndHeights)
})
