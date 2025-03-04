import { useScrollToAnchor } from '@/hooks';
import appService from '@/services/app.service';
import { PartnersGoods } from '@/types/partnersGoods.types';
import { Clans } from '@/types/teams.types';
import Main from '@MainPageComponents/Main';
import { FC, useEffect, useState } from 'react';

const MainPage: FC = () => {
  const [partnersGoods, setPartnersGoods] = useState<PartnersGoods>([]);
  const [clans, setClans] = useState<Clans>([]);
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

  useEffect(() => {
    const getClans = async () => {
      try {
        const response = await appService.getRating();

        setClans(response.clans);
      } catch (error) {}
    };

    getClans();
  }, []);

  return <Main partnersGoods={partnersGoods} clans={clans} />;
};

export default MainPage;
