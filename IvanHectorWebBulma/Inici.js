document.addEventListener("DOMContentLoaded", function() {

    var links = document.querySelectorAll('a[href^="#"]');
    
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function(event) {
            event.preventDefault();
            

            var targetId = this.getAttribute("href").substring(1);
            var targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector('.form-container form');

    form.addEventListener("submit", function(event) {
        
        var nombre = document.querySelector('#nombre').value.trim();
        var apellidos = document.querySelector('#apellidos').value.trim();
        var email = document.querySelector('#email').value.trim();

        
        if (nombre === '' || apellidos === '' || email === '') {
            alert('Por favor, completa todos los campos.');
            event.preventDefault(); 
            return;
        }

        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, introduce un correo electrónico válido.');
            event.preventDefault(); 
            return;
        }
    });
});