import { useEffect, useState } from 'react';

const PageLoader = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-background flex items-center justify-center flex-col gap-5 transition-opacity duration-600 ${
        hidden ? 'opacity-0 invisible pointer-events-none' : ''
      }`}
    >
      <div className="font-heading text-6xl tracking-[8px] text-foreground animate-pulse">
        NERDY<span className="text-primary">.</span>
      </div>
      <div className="w-[200px] h-[2px] bg-foreground/10 overflow-hidden">
        <div
          className="h-full bg-primary"
          style={{ animation: 'loaderFill 1.4s ease forwards' }}
        />
      </div>
    </div>
  );
};

export default PageLoader;
