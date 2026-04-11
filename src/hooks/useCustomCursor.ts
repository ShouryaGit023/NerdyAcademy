import { useEffect, useRef } from 'react';

export function useCustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    const onMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX - 6}px`;
      cursor.style.top = `${e.clientY - 6}px`;
      setTimeout(() => {
        follower.style.left = `${e.clientX - 18}px`;
        follower.style.top = `${e.clientY - 18}px`;
      }, 80);
    };

    const grow = () => {
      cursor.style.transform = 'scale(2.5)';
      follower.style.transform = 'scale(1.5)';
    };
    const shrink = () => {
      cursor.style.transform = 'scale(1)';
      follower.style.transform = 'scale(1)';
    };

    document.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });

    return () => {
      document.removeEventListener('mousemove', onMove);
    };
  }, []);

  return { cursorRef, followerRef };
}
