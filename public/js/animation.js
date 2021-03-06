//moves right one square, background becomes white, spins 360
function moveRight(move) {
    gsap.to(".logo", {
        delay: 1,
        duration: 2,
        x: 0 + move,
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
    resetRotation();
};

function resetRotation() {
    gsap.to(".logo", {
        delay: 4,
        duration: 0,
        rotation: 0
    });
};

moveRight();
