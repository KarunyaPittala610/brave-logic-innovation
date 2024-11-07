// Smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function openModal(id) {
    document.getElementById(id).style.display = "block";
 }
 
 function closeModal(id) {
    document.getElementById(id).style.display = "none";
 }
 