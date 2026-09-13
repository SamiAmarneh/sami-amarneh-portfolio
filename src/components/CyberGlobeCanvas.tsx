import React, { useEffect, useRef } from 'react';

export const CyberGlobeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = container.clientWidth);
    let height = (canvas.height = container.clientHeight);

    // Resize observer
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });
    ro.observe(container);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / width - 0.5;
      const ny = (e.clientY - rect.top) / height - 0.5;
      mouseRef.current.targetX = nx * 0.8;
      mouseRef.current.targetY = ny * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 3D Nodes data
    const NUM_POINTS = 160;
    const points: { x: number; y: number; z: number; size: number; color: string }[] = [];
    const radius = Math.min(width, height) * 0.38;

    // Generate fibonacci sphere points
    for (let i = 0; i < NUM_POINTS; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / NUM_POINTS);
      const theta = Math.PI * (1 + 5 ** 0.5) * i;

      const x = Math.cos(theta) * Math.sin(phi);
      const y = Math.sin(theta) * Math.sin(phi);
      const z = Math.cos(phi);

      const isSpecial = i % 8 === 0;
      points.push({
        x: x * radius,
        y: y * radius,
        z: z * radius,
        size: isSpecial ? 2.8 : 1.4,
        color: isSpecial ? '#FF007F' : i % 3 === 0 ? '#00F3FF' : '#888899'
      });
    }

    let rotX = 0.2;
    let rotY = 0;
    let radarAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse follow
      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      rotY += 0.007;
      radarAngle += 0.02;

      const currentRotX = rotX + mouseRef.current.y * 0.4;
      const currentRotY = rotY + mouseRef.current.x * 0.6;

      const cx = width / 2;
      const cy = height / 2;
      const currentRadius = Math.min(width, height) * 0.36;

      // Draw outer HUD rings
      ctx.save();
      ctx.translate(cx, cy);

      // Outer dashed circle
      ctx.beginPath();
      ctx.arc(0, 0, currentRadius * 1.25, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.12)';
      ctx.setLineDash([4, 12]);
      ctx.lineWidth = 1;
      ctx.stroke();

      // Middle target ring
      ctx.beginPath();
      ctx.arc(0, 0, currentRadius * 1.12, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255, 0, 127, 0.1)';
      ctx.setLineDash([20, 40]);
      ctx.lineWidth = 1.2;
      ctx.stroke();

      // Radar sweep sector
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.arc(0, 0, currentRadius * 1.25, radarAngle, radarAngle + 0.35);
      ctx.closePath();
      const sweepGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, currentRadius * 1.25);
      sweepGrad.addColorStop(0, 'rgba(0, 243, 255, 0.15)');
      sweepGrad.addColorStop(1, 'rgba(0, 243, 255, 0)');
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Crosshair lines
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(0, 243, 255, 0.2)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-currentRadius * 1.35, 0);
      ctx.lineTo(-currentRadius * 1.15, 0);
      ctx.moveTo(currentRadius * 1.15, 0);
      ctx.lineTo(currentRadius * 1.35, 0);
      ctx.moveTo(0, -currentRadius * 1.35);
      ctx.lineTo(0, -currentRadius * 1.15);
      ctx.moveTo(0, currentRadius * 1.15);
      ctx.lineTo(0, currentRadius * 1.35);
      ctx.stroke();

      // Geometric Latitude Rings in 3D
      const numRings = 5;
      for (let r = 1; r < numRings; r++) {
        const ringY = Math.cos((r / numRings) * Math.PI) * currentRadius;
        const ringRad = Math.sin((r / numRings) * Math.PI) * currentRadius;

        ctx.beginPath();
        // Project ring ellipse based on currentRotX
        const ringTiltY = ringY * Math.cos(currentRotX);
        const yRadius = ringRad * Math.abs(Math.sin(currentRotX));
        ctx.ellipse(0, ringTiltY, ringRad, Math.max(yRadius, 2), 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(0, 243, 255, 0.08)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();

      // Project 3D points
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      const projectedPoints: { x2d: number; y2d: number; z: number; color: string; size: number }[] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // Rotate Y
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        // Rotate X
        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective
        const fov = 400;
        const scale = fov / (fov + z2 + currentRadius);
        const x2d = cx + x1 * scale;
        const y2d = cy + y2 * scale;

        projectedPoints.push({
          x2d,
          y2d,
          z: z2,
          color: p.color,
          size: Math.max(0.8, p.size * scale)
        });
      }

      // Sort points back to front
      projectedPoints.sort((a, b) => a.z - b.z);

      // Draw interconnecting network lines between nearby projected nodes
      ctx.lineWidth = 0.8;
      for (let i = 0; i < projectedPoints.length; i++) {
        const p1 = projectedPoints[i];
        if (p1.z < -currentRadius * 0.4) continue; // Skip backmost lines

        for (let j = i + 1; j < Math.min(i + 7, projectedPoints.length); j++) {
          const p2 = projectedPoints[j];
          const dist = Math.hypot(p1.x2d - p2.x2d, p1.y2d - p2.y2d);
          if (dist < 46) {
            const alpha = (1 - dist / 46) * (p1.z > 0 ? 0.25 : 0.08);
            ctx.beginPath();
            ctx.moveTo(p1.x2d, p1.y2d);
            ctx.lineTo(p2.x2d, p2.y2d);
            ctx.strokeStyle = `rgba(0, 243, 255, ${alpha})`;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        const alpha = p.z > 0 ? 0.9 : 0.25;

        ctx.beginPath();
        ctx.arc(p.x2d, p.y2d, p.size, 0, Math.PI * 2);
        if (p.color === '#FF007F') {
          ctx.fillStyle = `rgba(255, 0, 127, ${alpha})`;
          ctx.shadowColor = '#FF007F';
          ctx.shadowBlur = p.z > 0 ? 8 : 0;
        } else if (p.color === '#00F3FF') {
          ctx.fillStyle = `rgba(0, 243, 255, ${alpha})`;
          ctx.shadowColor = '#00F3FF';
          ctx.shadowBlur = p.z > 0 ? 6 : 0;
        } else {
          ctx.fillStyle = `rgba(136, 136, 153, ${alpha})`;
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // HUD Coordinates Overlay
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(0, 243, 255, 0.6)';
      ctx.fillText(`ROT_AZ: ${(rotY % (Math.PI * 2)).toFixed(2)} rad`, 16, 24);
      ctx.fillText(`SYS_LAT: ${(32.4646).toFixed(4)}° N`, 16, 38);
      ctx.fillText(`SYS_LON: ${(35.2939).toFixed(4)}° E`, 16, 52);
      ctx.fillText(`NODES: ${NUM_POINTS} ACTIVE`, 16, 66);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[360px] sm:h-[420px] md:h-[480px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* High-tech HUD bounding accents */}
      <div className="absolute top-2 left-2 flex items-center gap-1 text-[10px] text-[#00F3FF]/70 font-mono tracking-wider pointer-events-none">
        <span className="inline-block w-1.5 h-1.5 bg-[#00F3FF] animate-ping" />
        <span>GNSS_RADAR // 35.29°E</span>
      </div>

      <div className="absolute bottom-2 right-2 text-[9px] text-[#888899] font-mono tracking-widest text-right pointer-events-none">
        <div>ORBIT_FREQ: 60Hz</div>
        <div className="text-[#00F3FF]/80">ESP32_TELEMETRY: SYNCD</div>
      </div>
    </div>
  );
};
