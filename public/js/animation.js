//moves right one square, background becomes white, spins 360
function moveRight() {
    gsap.to(".logo", {
        delay: 1,
        duration: 2,
        x: 80,
        backgroundColor: "white",
        borderRadius: "50%",
        border: "10px solid white",
        ease: "back"
    });
    gsap.to(".logo", {
        delay: 3,
        duration: 1,
        rotation: 360
    });
};
moveRight();