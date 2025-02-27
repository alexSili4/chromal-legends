import { IUseTopGap } from '@/types/hooks.types';
import { NumberOrNull } from '@/types/types';
import { useEffect, useRef, useState } from 'react';

const useTopGap = (triggers?: Array<any>): IUseTopGap => {
  const [topGap, setTopGap] = useState<NumberOrNull>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isPositiveTopGap = topGap && topGap > 0;
  const targetTopGap = isPositiveTopGap ? 0 : topGap;

  useEffect(() => {
    const scrollHeight = sectionRef.current?.scrollHeight;

    if (scrollHeight) {
      const topGap = window.innerHeight - scrollHeight;
      setTopGap(topGap);
    }
  }, [triggers]);

  return {
    topGap: targetTopGap,
    sectionRef,
  };
};

export default useTopGap;
