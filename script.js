document.addEventListener('DOMContentLoaded', () => {
	// SCROLL HEADER
	const header = document.querySelector('header')

	const checkScroll = () => {
		header.style.backgroundColor =
			window.scrollY > 91 ? 'var(--color-base)' : 'var(--color-transparent)'
	}
	checkScroll()

	document.addEventListener('scroll', checkScroll)

	// GALLERY
	const buttons = document.querySelectorAll('.photography__buttons .button')
	const groups = document.querySelectorAll('.photography__group')

	const makeInactive = arr => {
		arr.forEach(i => i.classList.remove('active'))
	}

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('click', e => {
			makeInactive(buttons)
			e.target.classList.add('active')
			makeInactive(groups)
			groups[i].classList.add('active')
		})
	}

	// GET STARTED
	const submitButton = document.querySelector('.getstarted__form .button')

	submitButton.addEventListener('click', e => {
		e.preventDefault()

		const data = {
			name: document.querySelector('[id="name"]').value,
			email: document.querySelector('[id="email"]').value,
			message: document.querySelector('[id="textarea"]').value,
		}

		console.log(data)
	})

	// SLIDER
	const sliderWrap = document.querySelector('.slider__wrap')
	const sliderWrapWidth = sliderWrap.scrollWidth

	const move = e => {
		if (window.innerWidth < 991) return

		const x = e.clientX
		const coef = (sliderWrapWidth - window.innerWidth) / window.innerWidth
		sliderWrap.style.transform = `translateX(-${x * coef}px)`
	}

	document.addEventListener('mousemove', move)

	// SCROLL MENU
	const menu = document.querySelector('header nav ul')
	const menuLinks = document.querySelectorAll('header nav a')

	const goTo = e => {
		e.preventDefault()
		if (e.target.tagName != 'A') return

		makeInactive(menuLinks)
		let menuList = e.target.attributes.href.value.replace(/^#/, '')
		let item = document.querySelector(`[data-link='${menuList}']`)
		let top = item.getBoundingClientRect().top

		window.scrollBy({
			top: top - 90,
			behavior: 'smooth',
		})

		e.target.classList.add('active')
	}

	menu.addEventListener('click', goTo)

	// MOBILE MENU
	const hamburger = document.querySelector('.hamburger')
	const mobileMenu = document.querySelector('header nav')

	if (window.innerWidth < 767) {
		document.querySelectorAll('header nav li').forEach(li => {
			li.addEventListener('click', () => {
				mobileMenu.classList.remove('active')
				hamburger.classList.remove('active')
			})
		})
	}

	const toggleMenu = e => {
		e.stopPropagation()
		mobileMenu.classList.toggle('active')
		hamburger.classList.toggle('active')

		document.addEventListener('click', e => {
			if (!e.target.classList.contains('menu__link')) {
				mobileMenu.classList.remove('active')
				hamburger.classList.remove('active')
			}
		})
	}

	hamburger.addEventListener('click', toggleMenu)

	// GSAP
	gsap.from('.hero__image', {
		opacity: 0,
		duration: 1,
		x: -500,
	})

	gsap.from('.hero__text', {
		opacity: 0,
		duration: 1,
		x: 500,
	})

	gsap.registerPlugin(ScrollTrigger)

	const expTL = gsap.timeline({
		scrollTrigger: {
			trigger: '.experience__list',
			toggleActions: 'play reverse play reset',
		},
	})
	expTL
		.from('.experience__list-item-1', {
			opacity: 0,
			x: -250,
			duration: 0.5,
		})
		.from('.experience__list-item-2', {
			opacity: 0,
			x: -250,
			duration: 0.5,
		})
		.from('.experience__list-item-3', {
			opacity: 0,
			x: -250,
			duration: 0.5,
		})

	const skillsetTL = gsap.timeline({
		scrollTrigger: {
			trigger: '.skillset__items',
			toggleActions: 'play none none reset',
		},
	})

	skillsetTL
		.from('.skillset__item-1', {
			opacity: 0,
			duration: 0.5,
		})
		.from('.skillset__item-2', {
			opacity: 0,
			duration: 0.5,
		})
		.from('.skillset__item-3', {
			opacity: 0,
			duration: 0.5,
		})
		.from('.skillset__item-4', {
			opacity: 0,
			duration: 0.5,
		})

	const projectsTL = gsap.timeline({
		scrollTrigger: {
			trigger: '.projects__container',
			toggleActions: 'play none none none',
			start: 'top 80%',
		},
	})

	projectsTL
		.from('.project__item-3', {
			opacity: 0,
			duration: 0.5,
		})
		.from('.project__item-1', {
			opacity: 0,
			duration: 0.5,
		})
		.from('.project__item-4', {
			opacity: 0,
			duration: 0.5,
		})
		.from('.project__item-2', {
			opacity: 0,
			duration: 0.5,
		})

	const aboutmeTL = gsap.timeline({
		scrollTrigger: {
			trigger: '.aboutme__items',
			toggleActions: 'play reverse play reset',
			start: 'top 90%',
		},
	})

	aboutmeTL
		.fromTo(
			'.aboutme__item-1',
			{
				opacity: 0,
				duration: 0.5,
				scale: 0.8,
			},
			{
				opacity: 1,
				scale: 1,
			}
		)
		.fromTo(
			'.aboutme__item-2',
			{
				opacity: 0,
				duration: 0.5,
				scale: 0.8,
				delay: 0.5,
			},
			{
				opacity: 1,
				scale: 1,
			}
		)
		.fromTo(
			'.aboutme__item-3',
			{
				opacity: 0,
				duration: 0.5,
				scale: 0.8,
				delay: 1,
			},
			{
				opacity: 1,
				scale: 1,
			}
		)
})
