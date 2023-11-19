		// <div class="to-top">
		// 	<svg class="i-to-top">
		// 		<path d="M11.8923 0.878906L23.5596 12.5462L21.4382 14.6675L11.8923 5.12155L2.34636 14.6675L0.225042 12.5462L11.8923 0.878906Z" />
		// 	</svg>
		// </div>

		const toTop = document.querySelector('.to-top')

toTop.onclick = () => {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}

function toTopDisplayToggler() {
	if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >= 600) {
		toTop.classList.add('to-top--active')
	} else {
		toTop.classList.remove('to-top--active')
	}
}

window.addEventListener('scroll', () => {
	toTopDisplayToggler()
})
