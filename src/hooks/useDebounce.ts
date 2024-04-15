import { useEffect, useState } from 'react';

interface IDebounceProps {
  value: string;
  delay: number;
}

export const useDebounce = ({ value, delay }: IDebounceProps) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      // console.log('Setting new timeout');
      setDebounceValue(value);
    }, delay);

    return () => {
      // console.log('Clearing the timeout');
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debounceValue;
};
