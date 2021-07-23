//animations here
// gsap.to(".logo", {duration: 2, y: -120, backgroundColor: "white", borderRadius: "20%", border: "10px solid white"});


//move 1 space back (down)
const moveUp = gsap.timeline();

moveUp.to(".logo", {delay: 1, duration: 2, y: -110, backgroundColor: "white", borderRadius: "20%", border: "10px solid white", ease: "back"});
moveUp.to(".logo", {duration: 1, rotation: 360});


//moves up one square, background becomes white, spins 360
function up() { 
    moveUp.to(".logo", {delay: 1, duration: 2, y: -110, backgroundColor: "white", borderRadius: "20%", border: "10px solid white", ease: "back"});
moveUp.to(".logo", {duration: 1, rotation: 360});
};
//moves right one square, background becomes white, spins opposite 360
function right() { 
    gsap.to(".logo", {delay: 1, duration: 2, x: 110, backgroundColor: "white", borderRadius: "20%", border: "10px solid white", ease: "back"});
    gsap.to(".logo", {duration: 1, rotation: -360});
};
//moves down one square, background becomes white, spins 360
function down() {
    gsap.to(".logo", {delay: 1, duration: 2, y: 110, backgroundColor: "white", borderRadius: "20%", border: "10px solid white", ease: "elastic"});
    gsap.to(".logo", {duration: 1, rotation: 360});
};
//moves down one square, background becomes gold, spins 720
function levelUp() {
    gsap.to(".logo", {delay: 1, duration: 2, y: 110, backgroundColor: "gold", borderRadius: "20%", border: "10px solid gold", ease: "elastic"});
    gsap.to(".logo", {duration: 1, rotation: 720});
};

// up();
// right();
// down();
// levelUp();