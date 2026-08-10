import * as THREE from 'three';

export function init3DScanner(canvasElement) {
  if (!canvasElement) return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const width = canvasElement.clientWidth || 400;
  const height = canvasElement.clientHeight || 500;

  const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  camera.position.set(0, 0, 7.5);

  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    alpha: true,
    antialias: true,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Root Body Group for Rotation
  const bodyGroup = new THREE.Group();
  scene.add(bodyGroup);

  // Materials
  const particleMaterial = new THREE.PointsMaterial({
    color: 0x00F2FE,
    size: 0.045,
    transparent: true,
    opacity: 0.85,
    blending: THREE.AdditiveBlending,
  });

  const wireMaterial = new THREE.MeshBasicMaterial({
    color: 0x00FFA3,
    wireframe: true,
    transparent: true,
    opacity: 0.22,
  });

  const neonJointMaterial = new THREE.PointsMaterial({
    color: 0x00FFA3,
    size: 0.09,
    transparent: true,
    opacity: 0.95,
  });

  // Procedural 3D Humanoid Body Generation
  function createHumanoidMesh() {
    const geometries = [];

    // 1. Head
    const headGeo = new THREE.SphereGeometry(0.38, 14, 12);
    headGeo.translate(0, 2.3, 0);
    geometries.push(headGeo);

    // 2. Neck
    const neckGeo = new THREE.CylinderGeometry(0.18, 0.22, 0.35, 12);
    neckGeo.translate(0, 1.85, 0);
    geometries.push(neckGeo);

    // 3. Chest & Upper Torso
    const chestGeo = new THREE.CylinderGeometry(0.72, 0.58, 1.0, 16, 6);
    chestGeo.scale(1.1, 1, 0.7);
    chestGeo.translate(0, 1.25, 0);
    geometries.push(chestGeo);

    // 4. Waist & Abdomen
    const waistGeo = new THREE.CylinderGeometry(0.58, 0.62, 0.8, 16, 5);
    waistGeo.scale(1.0, 1, 0.68);
    waistGeo.translate(0, 0.45, 0);
    geometries.push(waistGeo);

    // 5. Hips / Pelvis
    const pelvisGeo = new THREE.CylinderGeometry(0.62, 0.55, 0.6, 16, 5);
    pelvisGeo.scale(1.05, 1, 0.72);
    pelvisGeo.translate(0, -0.15, 0);
    geometries.push(pelvisGeo);

    // 6. Left & Right Shoulders
    const lShoulder = new THREE.SphereGeometry(0.24, 10, 10);
    lShoulder.translate(-0.95, 1.6, 0);
    const rShoulder = new THREE.SphereGeometry(0.24, 10, 10);
    rShoulder.translate(0.95, 1.6, 0);
    geometries.push(lShoulder, rShoulder);

    // 7. Arms (Upper & Lower)
    const lUpperArm = new THREE.CylinderGeometry(0.18, 0.15, 0.9, 10);
    lUpperArm.rotateZ(0.2);
    lUpperArm.translate(-1.1, 1.05, 0);

    const rUpperArm = new THREE.CylinderGeometry(0.18, 0.15, 0.9, 10);
    rUpperArm.rotateZ(-0.2);
    rUpperArm.translate(1.1, 1.05, 0);

    const lForearm = new THREE.CylinderGeometry(0.14, 0.11, 0.9, 10);
    lForearm.rotateZ(0.15);
    lForearm.translate(-1.32, 0.25, 0);

    const rForearm = new THREE.CylinderGeometry(0.14, 0.11, 0.9, 10);
    rForearm.rotateZ(-0.15);
    rForearm.translate(1.32, 0.25, 0);

    geometries.push(lUpperArm, rUpperArm, lForearm, rForearm);

    // 8. Legs (Thighs & Calves)
    const lThigh = new THREE.CylinderGeometry(0.27, 0.2, 1.2, 12, 6);
    lThigh.rotateZ(-0.06);
    lThigh.translate(-0.4, -0.95, 0);

    const rThigh = new THREE.CylinderGeometry(0.27, 0.2, 1.2, 12, 6);
    rThigh.rotateZ(0.06);
    rThigh.translate(0.4, -0.95, 0);

    const lCalf = new THREE.CylinderGeometry(0.2, 0.14, 1.2, 12, 6);
    lCalf.translate(-0.45, -2.1, 0);

    const rCalf = new THREE.CylinderGeometry(0.2, 0.14, 1.2, 12, 6);
    rCalf.translate(0.45, -2.1, 0);

    geometries.push(lThigh, rThigh, lCalf, rCalf);

    // Add Wireframes & Particle Clouds
    geometries.forEach((geo) => {
      const wireMesh = new THREE.Mesh(geo, wireMaterial);
      const points = new THREE.Points(geo, particleMaterial);
      bodyGroup.add(wireMesh);
      bodyGroup.add(points);
    });

    // Biometric Landmark Key Joints (Chest, Waist, Hips, Knees, Shoulders)
    const landmarkPositions = [
      new THREE.Vector3(0, 1.4, 0.45),      // Chest center
      new THREE.Vector3(-0.7, 1.4, 0.1),    // Left chest edge
      new THREE.Vector3(0.7, 1.4, 0.1),     // Right chest edge
      new THREE.Vector3(0, 0.5, 0.4),       // Waist center
      new THREE.Vector3(0, -0.15, 0.42),    // Pelvis
      new THREE.Vector3(-0.42, -1.5, 0.15), // Left Knee
      new THREE.Vector3(0.42, -1.5, 0.15),  // Right Knee
      new THREE.Vector3(-0.95, 1.6, 0),     // L Shoulder
      new THREE.Vector3(0.95, 1.6, 0),      // R Shoulder
    ];

    const landmarkGeo = new THREE.BufferGeometry().setFromPoints(landmarkPositions);
    const landmarkPoints = new THREE.Points(landmarkGeo, neonJointMaterial);
    bodyGroup.add(landmarkPoints);
  }

  createHumanoidMesh();

  // Circular Scanning Laser Ring
  const scanRingGeo = new THREE.RingGeometry(1.6, 1.65, 64);
  const scanRingMat = new THREE.MeshBasicMaterial({
    color: 0x00F2FE,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.6,
  });
  const scanRing = new THREE.Mesh(scanRingGeo, scanRingMat);
  scanRing.rotation.x = Math.PI / 2;
  scene.add(scanRing);

  // Position body nicely
  bodyGroup.position.y = 0.1;

  // Mouse Interaction (Drag to Rotate)
  let isDragging = false;
  let previousMouseX = 0;
  let autoRotateSpeed = 0.008;

  canvasElement.addEventListener('mousedown', (e) => {
    isDragging = true;
    previousMouseX = e.clientX;
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - previousMouseX;
    bodyGroup.rotation.y += deltaX * 0.01;
    previousMouseX = e.clientX;
  });

  // Touch Support
  canvasElement.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDragging = true;
      previousMouseX = e.touches[0].clientX;
    }
  });

  window.addEventListener('touchend', () => {
    isDragging = false;
  });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - previousMouseX;
    bodyGroup.rotation.y += deltaX * 0.01;
    previousMouseX = e.touches[0].clientX;
  });

  // Window Resize Handling
  function onResize() {
    const newWidth = canvasElement.parentElement.clientWidth;
    const newHeight = canvasElement.parentElement.clientHeight;
    if (newWidth && newHeight) {
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    }
  }
  window.addEventListener('resize', onResize);

  // Animation Loop
  let clock = new THREE.Clock();
  let animFrameId;

  function animate() {
    animFrameId = requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    // Auto rotate if not dragged
    if (!isDragging) {
      bodyGroup.rotation.y += autoRotateSpeed;
    }

    // Laser Ring Vertical Oscillation
    const scanHeight = Math.sin(elapsedTime * 1.5) * 2.3 + 0.2;
    scanRing.position.y = scanHeight;

    renderer.render(scene, camera);
  }

  animate();

  return () => {
    cancelAnimationFrame(animFrameId);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
  };
}
