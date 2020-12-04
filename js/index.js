const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png',
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png',
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io',
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018',
	},
};

// Example: Update the img src for the logo
const logo = document.getElementById('logo-img');
logo.src = siteContent['nav']['img-src'];

//Site content -Nav Item text
const navText = document.querySelectorAll('nav a');
navText[0].textContent = siteContent['nav']['nav-item-1'];
navText[1].textContent = siteContent['nav']['nav-item-2'];
navText[2].textContent = siteContent['nav']['nav-item-3'];
navText[3].textContent = siteContent['nav']['nav-item-4'];
navText[4].textContent = siteContent['nav']['nav-item-5'];
navText[5].textContent = siteContent['nav']['nav-item-6'];

//change nav item color
navText.forEach(item => {
	item.style.color = 'orange';
});

// cta text and image
const ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = siteContent['cta']['h1'];

const ctaTextBtn = document.querySelector('.cta-text button');
ctaTextBtn.textContent = siteContent['cta']['button'];

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

// Top Content- H4's
const h4TopContent = document.querySelectorAll('.top-content h4');
h4TopContent[0].textContent = siteContent['main-content']['features-h4'];
h4TopContent[1].textContent = siteContent['main-content']['about-h4'];

// Top Content- paragraphs
const paraTopCotent = document.querySelectorAll('.top-content p');
paraTopCotent[0].textContent = siteContent['main-content']['features-content'];
paraTopCotent[1].textContent = siteContent['main-content']['about-content'];

// Middle Image
const midImg = document.querySelector('.middle-img');
midImg.src = siteContent['main-content']['middle-img-src'];

// Bottom Content- H4's
const h4BottomContent = document.querySelectorAll('.bottom-content h4');
h4BottomContent[0].textContent = siteContent['main-content']['services-h4'];
h4BottomContent[1].textContent = siteContent['main-content']['product-h4'];
h4BottomContent[2].textContent = siteContent['main-content']['vision-h4'];

// Bottom Content- paragraphs
const paraBottomContent = document.querySelectorAll('.bottom-content p');
paraBottomContent[0].textContent =
	siteContent['main-content']['services-content'];
paraBottomContent[1].textContent =
	siteContent['main-content']['product-content'];
paraBottomContent[2].textContent =
	siteContent['main-content']['vision-content'];

//Contact Section- H4
const contactsH4 = document.querySelector('.contact h4');
contactsH4.textContent = siteContent['contact']['contact-h4'];

//Contact Section- paragraphs
const paraContacts = document.querySelectorAll('.contact p');
paraContacts[0].textContent = siteContent['contact']['address'];
paraContacts[1].textContent = siteContent['contact']['phone'];
paraContacts[2].textContent = siteContent['contact']['email'];

//footer
const footer = document.querySelector('footer p');
footer.textContent = siteContent['footer']['copyright'];

//utilizing preprend
const frontNav = document.createElement('a');
frontNav.textContent = 'In Front';

document.querySelector('nav').prepend(frontNav);
frontNav.href = '#';
frontNav.style.color = 'purple';

//utilizing append child
const backNav = document.createElement('a');
backNav.textContent = 'Behind';

document.querySelector('nav').appendChild(backNav);
backNav.href = '#';
backNav.style.color = 'dodgerblue';
