import { useEffect, useRef } from "react";

export default function MiniChart({ id, color }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Generate random points
    const points = [];
    for (let i = 0; i < 10; i++) {
      points.push(Math.random() * canvas.height);
    }

    // Draw line
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;

    points.forEach((point, index) => {
      const x = (canvas.width / (points.length - 1)) * index;
      if (index === 0) ctx.moveTo(x, point);
      else ctx.lineTo(x, point);
    });

    ctx.stroke();

    // Gradient fill
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    gradient.addColorStop(0, color + "40");
    gradient.addColorStop(1, color + "00");

    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }, [color]);

  return <canvas ref={canvasRef} className="mini-chart"></canvas>;
}
