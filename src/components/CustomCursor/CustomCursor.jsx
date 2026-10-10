import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const TRAIL_LENGTH = 22;
const FOLLOW = 0.45;
const DOT_RADIUS = 6;
const HOVER_RADIUS = 18;
const COLOR = "255, 255, 255";

const CustomCursor = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const mouse = { x: -100, y: -100 };
    const trail = Array.from({ length: TRAIL_LENGTH }, () => ({ ...mouse }));
    let hovered = false;
    let visible = false;
    let radius = DOT_RADIUS;
    let frameId;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;

      if (!visible) {
        trail.forEach((point) => {
          point.x = mouse.x;
          point.y = mouse.y;
        });
        visible = true;
      }
    };

    const handleMouseOver = (e) => {
      hovered = !!e.target.closest("a, button");
    };

    const handleMouseLeave = () => {
      visible = false;
    };

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      if (visible) {
        trail[0].x = mouse.x;
        trail[0].y = mouse.y;
        for (let i = 1; i < TRAIL_LENGTH; i++) {
          trail[i].x += (trail[i - 1].x - trail[i].x) * FOLLOW;
          trail[i].y += (trail[i - 1].y - trail[i].y) * FOLLOW;
        }

        ctx.lineCap = "round";
        for (let i = 1; i < TRAIL_LENGTH; i++) {
          const progress = 1 - i / TRAIL_LENGTH;
          ctx.beginPath();
          ctx.moveTo(trail[i - 1].x, trail[i - 1].y);
          ctx.lineTo(trail[i].x, trail[i].y);
          ctx.lineWidth = DOT_RADIUS * 1.2 * progress;
          ctx.strokeStyle = `rgba(${COLOR}, ${progress * 0.9})`;
          ctx.stroke();
        }

        radius += ((hovered ? HOVER_RADIUS : DOT_RADIUS) - radius) * 0.2;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, radius, 0, Math.PI * 2);
        if (hovered) {
          ctx.lineWidth = 1.5;
          ctx.strokeStyle = `rgb(${COLOR})`;
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgb(${COLOR})`;
          ctx.fill();
        }
      }

      frameId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="custom-cursor" aria-hidden="true" />;
};

export default CustomCursor;
