import { PagePaths } from '@/constants';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

const NotFoundPage: FC = () => {
  return <Navigate to={PagePaths.root} />;
};

export default NotFoundPage;
