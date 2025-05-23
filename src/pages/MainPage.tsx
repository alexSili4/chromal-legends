import { useScrollToAnchor } from '@/hooks';
import appService from '@/services/app.service';
import { PartnersGoods } from '@/types/partnersGoods.types';
import Main from '@MainPageComponents/Main';
import { FC, useEffect, useState } from 'react';
import { tournamentsData } from '@/constants';

const MainPage: FC = () => {
  const [partnersGoods, setPartnersGoods] = useState<PartnersGoods>([]);
  useScrollToAnchor();

  useEffect(() => {
    const getPartnersGoods = async () => {
      try {
        const response = await appService.getPartnersGoods();

        setPartnersGoods(response.items);
      } catch (error) {}
    };

    getPartnersGoods();
  }, []);

  return (
    <Main
      partnersGoods={partnersGoods}
      tournaments={tournamentsData.tournaments}
    />
  );
};

export default MainPage;
