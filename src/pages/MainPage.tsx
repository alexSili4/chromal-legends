import { useScrollToAnchor } from '@/hooks';
import Main from '@MainPageComponents/Main';
import { FC } from 'react';

const MainPage: FC = () => {
  useScrollToAnchor();

  return <Main />;
};

export default MainPage;
