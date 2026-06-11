import { useMemo } from 'react';

interface Star {
  id: number;
  top: string;
  left: string;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  type: 'static' | 'twinkle';
}

interface ShootingStar {
  id: number;
  top: string;
  right: string;
  delay: number;
  duration: number;
}

export default function StarField() {
  const staticStars = useMemo<Star[]>(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.2,
      delay: 0,
      duration: 0,
      type: 'static' as const,
    }));
  }, []);

  const twinklingStars = useMemo<Star[]>(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i + 1000,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 2.5 + 2,
      opacity: 1,
      delay: Math.random() * 4,
      duration: Math.random() * 2 + 2,
      type: 'twinkle' as const,
    }));
  }, []);

  const shootingStars = useMemo<ShootingStar[]>(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i + 2000,
      top: `${Math.random() * 40}%`,
      right: `${Math.random() * 40}%`,
      delay: i * 3 + Math.random() * 2,
      duration: Math.random() * 1.5 + 1.5,
    }));
  }, []);

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    >
      {/* Static Stars */}
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
          }}
        />
      ))}

      {/* Twinkling Stars */}
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
            boxShadow: '0 0 6px rgba(255, 255, 255, 0.8)',
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            top: star.top,
            right: star.right,
            animation: `shoot ${star.duration}s linear ${star.delay}s infinite`,
          }}
        >
          <div
            className="relative"
            style={{
              width: '100px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #00e5ff)',
              borderRadius: '1px',
            }}
          >
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2"
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                background: '#00e5ff',
                boxShadow: '0 0 10px #00e5ff, 0 0 20px #00e5ff',
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
