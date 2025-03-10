import { makeScroll } from '@/utils';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToAnchor = () => {
  const { hash } = useLocation();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (hash && isFirstRender.current) {
      makeScroll({ id: hash, behavior: 'instant' });

      isFirstRender.current = false;
    }
  });
};

export default useScrollToAnchor;
