import { useRef } from 'react';

function useDebounce(callback, delay) {
  const timeoutRef = useRef(null);

  function debouncedCallback(...args) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      callback(...args);
    }, delay);
  }

  return debouncedCallback;
}

export default useDebounce;
