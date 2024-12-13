
const contactBtn = document.getElementById('contact-btn');
const aboutBtn = document.getElementById('about-btn');
const contactInfo = document.getElementById('contact-info');
const aboutInfo = document.getElementById('about-info');


contactBtn.addEventListener('click', () => {
    contactInfo.classList.toggle('hidden'); 
    aboutInfo.classList.add('hidden');     
});


aboutBtn.addEventListener('click', () => {
    aboutInfo.classList.toggle('hidden'); 
    contactInfo.classList.add('hidden'); 
});
