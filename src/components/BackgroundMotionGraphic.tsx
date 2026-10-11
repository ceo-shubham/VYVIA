import React, { useEffect, useRef } from 'react';

interface BackgroundMotionGraphicProps {
  intensity?: 'subtle' | 'vibrant';
  interactive?: boolean;
}

export const BackgroundMotionGraphic: React.FC<BackgroundMotionGraphicProps> = ({
  intensity = 'subtle',
  interactive = true,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle system simulating floating bio-molecules and gentle light orbs
    const particleCount = intensity === 'vibrant' ? 45 : 28;
    const particles: {
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      alpha: number;
      color: string;
      pulseSpeed: number;
    }[] = [];

    const colors = [
      'rgba(16, 185, 129,', // emerald
      'rgba(45, 90, 71,',   // vyvia forest
      'rgba(74, 107, 93,',  // sage
      'rgba(220, 174, 157,', // rose gold
      'rgba(217, 119, 87,',  // coral
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 4 + 1.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        alpha: Math.random() * 0.4 + 0.15,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Gentle undulating ribbons / wave lines
    let waveOffset = 0;

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // 1. Draw glowing ambient light pools (drifting motion graphic aurora)
      waveOffset += 0.008;

      // Soft emerald light pool 1
      const g1X = width * 0.3 + Math.sin(waveOffset * 0.8) * 120;
      const g1Y = height * 0.4 + Math.cos(waveOffset * 0.6) * 80;
      const rad1 = Math.min(width, height) * 0.45;
      const grad1 = ctx.createRadialGradient(g1X, g1Y, 0, g1X, g1Y, rad1);
      grad1.addColorStop(0, 'rgba(220, 232, 225, 0.45)');
      grad1.addColorStop(0.5, 'rgba(243, 232, 226, 0.2)');
      grad1.addColorStop(1, 'rgba(252, 251, 248, 0)');
      ctx.fillStyle = grad1;
      ctx.beginPath();
      ctx.arc(g1X, g1Y, rad1, 0, Math.PI * 2);
      ctx.fill();

      // Soft rose gold / peach light pool 2
      const g2X = width * 0.75 + Math.cos(waveOffset * 0.7) * 140;
      const g2Y = height * 0.6 + Math.sin(waveOffset * 0.9) * 90;
      const rad2 = Math.min(width, height) * 0.4;
      const grad2 = ctx.createRadialGradient(g2X, g2Y, 0, g2X, g2Y, rad2);
      grad2.addColorStop(0, 'rgba(220, 174, 157, 0.18)');
      grad2.addColorStop(0.6, 'rgba(249, 247, 242, 0.1)');
      grad2.addColorStop(1, 'rgba(252, 251, 248, 0)');
      ctx.fillStyle = grad2;
      ctx.beginPath();
      ctx.arc(g2X, g2Y, rad2, 0, Math.PI * 2);
      ctx.fill();

      // 2. Flowing organic fluid wave line (kinetic ribbon)
      ctx.save();
      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = 'rgba(45, 90, 71, 0.12)';

      for (let x = 0; x <= width; x += 15) {
        const y =
          height * 0.5 +
          Math.sin(x * 0.003 + waveOffset) * 45 +
          Math.cos(x * 0.0015 + waveOffset * 1.2) * 30;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Second harmonizing wave
      ctx.beginPath();
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
      for (let x = 0; x <= width; x += 15) {
        const y =
          height * 0.52 +
          Math.cos(x * 0.0025 + waveOffset * 0.9) * 40 +
          Math.sin(x * 0.002 + waveOffset * 1.4) * 25;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.restore();

      // 3. Render floating bioluminescent particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around bounds
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Interactive gentle drift away from cursor
        if (interactive) {
          const dx = mouseX - p.x;
          const dy = mouseY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.x -= (dx / dist) * 0.8;
            p.y -= (dy / dist) * 0.8;
          }
        }

        // Pulse alpha
        const currentAlpha = p.alpha + Math.sin(waveOffset * 4 + p.x) * 0.08;

        ctx.beginPath();
        ctx.fillStyle = `${p.color} ${Math.max(0.05, Math.min(0.6, currentAlpha))})`;
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [intensity, interactive]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full opacity-80"
      aria-hidden="true"
    />
  );
};
