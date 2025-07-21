import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const StarBackground = () => {
const canvasRef = useRef(null);

useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpi = window.devicePixelRatio || 1;

    const resizeCanvas = () => {
    canvas.width = window.innerWidth * dpi;
    canvas.height = window.innerHeight * dpi;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpi, dpi);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const dots = [];
    const numDots = 140;

    for (let i = 0; i < numDots; i++) {
    dots.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        radius: 1.3 + Math.random() * 1.2,
        dx: (Math.random() - 0.5) * 0.8,
        dy: (Math.random() - 0.5) * 0.8,
    });
    }

    const mouse = {
    x: null,
    y: null,
    radius: Math.min(window.innerWidth, window.innerHeight) / 5,
    };

    const handleMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    };

    const handleTouch = (e) => {
    const touch = e.touches[0];
    if (touch) {
        mouse.x = touch.clientX;
        mouse.y = touch.clientY;
    }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouch, { passive: true });

    function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let dot of dots) {
        dot.x += dot.dx;
        dot.y += dot.dy;

        if (dot.x < 0 || dot.x > window.innerWidth) dot.dx *= -1;
        if (dot.y < 0 || dot.y > window.innerHeight) dot.dy *= -1;

        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
        const angle = Math.atan2(dy, dx);
        dot.x -= Math.cos(angle) * 1.5;
        dot.y -= Math.sin(angle) * 1.5;
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.shadowColor = "white";
        ctx.shadowBlur = 6;
        ctx.fill();
    }

    requestAnimationFrame(animate);
    }

    animate();

    return () => {
    window.removeEventListener("resize", resizeCanvas);
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("touchmove", handleTouch);
    };
}, []);

return (
    <motion.canvas
    ref={canvasRef}
    className="fixed inset-0 z-0"
    style={{ touchAction: "none", pointerEvents: "auto" }}
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.5, ease: "easeOut" }}
    />
);
};
