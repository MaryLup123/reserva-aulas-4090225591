document.addEventListener('DOMContentLoaded', function() {
    console.log("Página cargada y lista.");
    
    // Puedes agregar interacciones dinámicas aquí.
    // Ejemplo: Resaltar un enlace cuando se pasa el ratón por encima:
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.color = "#f4a261"; // Cambia el color al pasar el ratón
        });
        link.addEventListener('mouseout', function() {
            link.style.color = "#fff"; // Vuelve al color original
        });
    });
});
