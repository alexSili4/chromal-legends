import { IUseTopGap } from '@/types/hooks.types';
import { NumberOrNull } from '@/types/types';
import { useEffect, useRef, useState } from 'react';

const useTopGap = (triggers?: Array<any>): IUseTopGap => {
  const [topGap, setTopGap] = useState<NumberOrNull>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollHeight = sectionRef.current?.scrollHeight;

    if (scrollHeight) {
      const topGap = window.innerHeight - scrollHeight;
      setTopGap(topGap);
    }
  }, [triggers]);

  return {
    topGap,
    sectionRef,
  };
};

export default useTopGap;
