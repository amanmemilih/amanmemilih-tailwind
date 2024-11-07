$(document).ready(function () {
    $('.king').hover(
        function () {
            $(this).animate({
                marginTop: "-10px",
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)"
            }, 300);
        },
        function () {
            $(this).animate({
                marginTop: "0px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
            }, 300);
        }
    );
});


// JQUERY Wildan
$(document).ready(function () {
    $(".confettiButton").on("click", function () {
        confettiAnimation(this);
    });
});

function confettiAnimation(element) {
    // Dapatkan posisi tombol di layar
    const rect = element.getBoundingClientRect();
    const originX = (rect.left + rect.width / 2) / window.innerWidth;
    const originY = (rect.top + rect.height / 2) / window.innerHeight;

    // Luncurkan confetti dari posisi tombol
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { x: originX, y: originY }
    });
}
