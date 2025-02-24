import { IMakeScrollProps } from '@/types/functions.types';

const makeScroll = ({
  id,
  block = 'start',
  behavior = 'smooth',
}: IMakeScrollProps) => {
  const targetElement = document.querySelector(id);

  targetElement?.scrollIntoView({
    behavior: behavior,
    block,
  });
};

export default makeScroll;
