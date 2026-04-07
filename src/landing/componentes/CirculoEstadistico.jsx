import React, { useRef, useState, useEffect } from 'react';
import '../../assets/css/circuloEstadistica.css'

export default function CircleStat({ value, label = '', size = 150, strokeWidth = 8, duration = 1500 }) {
    const wrapperRef = useRef(null);
    const [progress, setProgress] = useState(0);
    const [displayValue, setDisplayValue] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
  
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const dashOffset = circumference * (1 - progress);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        entries => {
          if (entries[0].isIntersecting && !hasAnimated) {
            animate();
            observer.disconnect();
          }
        },
        { threshold: 0.4 }
      );
      if (wrapperRef.current) observer.observe(wrapperRef.current);
      return () => observer.disconnect();
    }, [hasAnimated]);
  
    const animate = () => {
      setHasAnimated(true);
      setProgress(value / 100);
      const startAt = performance.now();
      const step = now => {
        const elapsed = now - startAt;
        const t = Math.min(elapsed / duration, 1);
        setDisplayValue(Math.floor(t * value));
        if (t < 1) requestAnimationFrame(step);
        else setDisplayValue(value);
      };
      requestAnimationFrame(step);
    };
  
    return (
      <div
        ref={wrapperRef}
        className="circle-stat"
        style={{ width: size, height: size }}
      >
        <svg width={size} height={size} className="circle-svg">
          <circle
            className="circle-bg"
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
          />
          <circle
            className="circle-fg"
            cx={radius + strokeWidth / 2}
            cy={radius + strokeWidth / 2}
            r={radius}
            strokeWidth={strokeWidth}
            style={{
              strokeDasharray: `${circumference}px`,
              strokeDashoffset: `${dashOffset}px`,
              transition: `stroke-dashoffset ${duration}ms ease-out`
            }}
          />
        </svg>
        <div className="circle-text">{displayValue}</div>
        <div className="circle-label">{label}</div>
      </div>
    );
  }