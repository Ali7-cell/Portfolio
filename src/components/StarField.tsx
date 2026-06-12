import { useMemo } from 'react';

export default function StarField() {
  // Detect mobile for performance: fewer stars on small screens
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const staticStars = useMemo(() => {
    const count = isMobile ? 40 : 80;
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, [isMobile]);

  const twinklingStars = useMemo(() => {
    const count = isMobile ? 12 : 25;
    return Array.from({ length: count }, (_, i) => ({
      id: i + 1000,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 2,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 2,
    }));
  }, [isMobile]);

  const shootingStars = useMemo(() => {
    const count = isMobile ? 2 : 5;
    return Array.from({ length: count }, (_, i) => ({
      id: i + 2000,
      top: `${Math.random() * 40}%`,
      right: `${Math.random() * 40}%`,
      delay: i * 3 + Math.random() * 2,
      duration: Math.random() * 1.5 + 1.5,
    }));
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {staticStars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            willChange: 'opacity',
          }}
        />
      ))}

      {twinklingStars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            boxShadow: '0 0 6px rgba(255,255,255,0.8)',
            willChange: 'opacity',
          }}
        />
      ))}

      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: star.top,
            right: star.right,
            animation: `shoot ${star.duration}s linear ${star.delay}s infinite`,
            willChange: 'transform, opacity',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00e5ff)',
              borderRadius: '1px',
              position: 'relative',
            }}
          >
            <div
              style={{
                position: 'absolute',
                right: 0,
                top: '50%',
                transform: 'translateY(-50%)',
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#00e5ff',
                boxShadow: '0 0 10px #00e5ff',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
