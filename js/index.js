const siteContent = {
    "nav": {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    "cta": {
        "h1": "DOM Is Awesome",
        "button": "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    },
    "contact": {
        "contact-h4": "Contact",
        "address": "123 Way 456 Street Somewhere, USA",
        "phone": "1 (888) 888-8888",
        "email": "sales@greatidea.io",
    },
    "footer": {
        "copyright": "Copyright Great Idea! 2018"
    },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll('nav a');
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Featurs";
nav[4].textContent = "About";
nav[5].textContent = "Contact";


nav.forEach(function(currentValue) {
    currentValue.style.color = "green";
});
let nav2 = document.querySelector("nav");
const newATag = document.createElement("a");
newATag.textContent = "Cristina Edens";
newATag.href = 'https://github.com/cristinaedens'
newATag.target = '_blank'
newATag.style.color = 'pink';
nav2.prepend(newATag);

const lastName = document.createElement('a');
lastName.textContent = 'do better guided';
lastName.href = 'https://www.linkedin.com/in/cristina-edens-65777b198/'
lastName.style.color = 'pink';
nav2.append(lastName);



const title = document.querySelectorAll('h1');
title[0].textContent = "DOM is Awesome"

const button = document.querySelectorAll('button');
button[0].textContent = "Get Started";

const snippet = document.getElementById('cta-img');
snippet.setAttribute('src', siteContent['cta']['img-src']);

const middleTop = document.querySelectorAll('.main-content h4');
middleTop[0].textContent = siteContent["main-content"]['features-h4'];
middleTop[1].textContent = siteContent['main-content']['about-h4'];
middleTop[2].textContent = siteContent['main-content']['services-h4'];
middleTop[3].textContent = siteContent['main-content']['product-h4'];
middleTop[4].textContent = siteContent['main-content']['vision-h4'];

const text = document.querySelectorAll('.main-content p');
text[0].textContent = siteContent['main-content']['features-content'];
text[1].textContent = siteContent['main-content']['about-content'];
text[2].textContent = siteContent['main-content']['services-content'];
text[3].textContent = siteContent['main-content']['product-content'];
text[4].textContent = siteContent['main-content']['vision-content'];

const middleImage = document.getElementById('middle-img');
middleImage.setAttribute('src', siteContent['main-content']['middle-img-src']);

const contact = document.querySelector('.contact h4');
contact.textContent = siteContent.contact['contact-h4'];

const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = siteContent.contact['address'];
contactText[1].textContent = siteContent.contact['phone'];
contactText[2].textContent = siteContent.contact['email'];

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer['copyright'];