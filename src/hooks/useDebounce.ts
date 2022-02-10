import {useRef} from 'react';

export default function useDebounce(fn, delay: number) {
  const timeOutRef = useRef(null);

  function debouncedFn(...args) {
    clearTimeout(timeOutRef.current);
    timeOutRef.current = setTimeout(() => {
      fn(args);
    }, delay);
  }

  return debouncedFn;
}
