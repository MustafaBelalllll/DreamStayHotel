// Várjuk meg, amíg a DOM teljesen betöltődik
document.addEventListener('DOMContentLoaded', function () {
    // Kiválasztjuk a navbar logóját
    const navbarBrand = document.querySelector('.navbar-brand');

    // Ellenőrizzük, hogy az elem létezik-e
    if (navbarBrand) {
        navbarBrand.addEventListener('click', function (event) {
            event.preventDefault(); // Alapértelmezett viselkedés megakadályozása
            window.scrollTo({
                top: 0, // Oldal tetejére görget
                behavior: 'smooth' // Sima animációval
            });
        });
    }
});
