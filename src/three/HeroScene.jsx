import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// Interactive WebGL hero background: a shattered icosahedron core wrapped in
// an orbiting particle lattice, drifting to the pointer.
export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // --- Core wireframe geometry ---------------------------------------
    const coreGeo = new THREE.IcosahedronGeometry(2.1, 1);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.55,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    const coreGeo2 = new THREE.IcosahedronGeometry(2.55, 0);
    const coreMat2 = new THREE.MeshBasicMaterial({
      color: 0xff2ea6,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreOuter = new THREE.Mesh(coreGeo2, coreMat2);
    scene.add(coreOuter);

    // --- Particle lattice orbiting the core -----------------------------
    const particleCount = 900;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const colorA = new THREE.Color(0x8b5cf6);
    const colorB = new THREE.Color(0xff2ea6);
    const colorC = new THREE.Color(0x6366f1);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 3.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mix = Math.random();
      const c =
        mix < 0.4 ? colorA : mix < 0.75 ? colorB : colorC;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // --- Faint connecting lines forming a data-grid ring ----------------
    const ringGeo = new THREE.TorusGeometry(4.4, 0.008, 8, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xec4899, transparent: true, opacity: 0.4 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    ring1.rotation.x = Math.PI / 2.3;
    scene.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo.clone(), new THREE.MeshBasicMaterial({ color: 0x6366f1, transparent: true, opacity: 0.3 }));
    ring2.rotation.x = Math.PI / 3.1;
    ring2.rotation.y = Math.PI / 4;
    ring2.scale.setScalar(0.75);
    scene.add(ring2);

    // --- Pointer interaction ---------------------------------------------
    const pointer = { x: 0, y: 0 };
    const targetRotation = { x: 0, y: 0 };

    function onPointerMove(e) {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      pointer.x = x;
      pointer.y = y;
      targetRotation.y = x * 0.4;
      targetRotation.x = y * 0.25;
    }
    window.addEventListener('pointermove', onPointerMove);

    let frameId;
    const clock = new THREE.Clock();

    function animate() {
      const t = clock.getElapsedTime();

      core.rotation.y = t * 0.15 + targetRotation.y;
      core.rotation.x = t * 0.08 + targetRotation.x;
      coreOuter.rotation.y = -t * 0.1 - targetRotation.y * 0.5;
      coreOuter.rotation.x = -t * 0.06;

      particles.rotation.y = t * 0.04 + targetRotation.y * 0.3;
      particles.rotation.x = targetRotation.x * 0.2;

      ring1.rotation.z = t * 0.12;
      ring2.rotation.z = -t * 0.09;

      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.03;
      camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      mount.removeChild(renderer.domElement);
      coreGeo.dispose();
      coreMat.dispose();
      coreGeo2.dispose();
      coreMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" aria-hidden="true" />;
}
