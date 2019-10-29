const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
	link.addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});
