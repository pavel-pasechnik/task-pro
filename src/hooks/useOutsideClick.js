import { useEffect } from 'react';
export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClick = event => {
      if (ref.current && event.target instanceof Element && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.body.addEventListener('click', handleClick);

    return () => document.body.removeEventListener('click', handleClick);
  }, [ref, callback]);
};
