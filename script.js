// הגדרת הסצנה, המצלמה והרינדורר
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("busCanvas") });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// יצירת רצפה (כביש)
const roadGeometry = new THREE.PlaneGeometry(10, 50);
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x444444 });
const road = new THREE.Mesh(roadGeometry, roadMaterial);
road.rotation.x = -Math.PI / 2;
scene.add(road);

// יצירת האוטובוס
const busGeometry = new THREE.BoxGeometry(2, 1, 4);
const busMaterial = new THREE.MeshBasicMaterial({ color: 0xffd700 });
const bus = new THREE.Mesh(busGeometry, busMaterial);
bus.position.y = 0.5;
scene.add(bus);

// מיקום המצלמה
camera.position.set(0, 5, 10);
camera.lookAt(bus.position);

// משתנים לתנועת האוטובוס
let speed = 0.1;
let direction = 0;

// האזנה למקשים
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") speed += 0.02;
    if (event.key === "ArrowDown") speed -= 0.02;
    if (event.key === "ArrowLeft") direction = 0.05;
    if (event.key === "ArrowRight") direction = -0.05;
});

document.addEventListener("keyup", () => {
    direction = 0;
});

// לולאת האנימציה
function animate() {
    requestAnimationFrame(animate);
    
    // הזזת האוטובוס
    bus.position.z -= speed;
    bus.rotation.y += direction;
    
    renderer.render(scene, camera);
}

animate();
