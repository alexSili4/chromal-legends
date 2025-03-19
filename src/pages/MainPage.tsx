import { useScrollToAnchor } from '@/hooks';
import appService from '@/services/app.service';
import { PartnersGoods } from '@/types/partnersGoods.types';
import { Tournaments } from '@/types/tournaments.types';
import Main from '@MainPageComponents/Main';
import { FC, useEffect, useState } from 'react';
import { tournamentsData } from '@/constants';

const MainPage: FC = () => {
  const [partnersGoods, setPartnersGoods] = useState<PartnersGoods>([]);
  const [tournaments, setTournaments] = useState<Tournaments>([]);
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

        setTournaments([
          { title: tournamentsData.current, clans: response.clans },
          ...tournamentsData.tournaments,
        ]);
      } catch (error) {}
    };

    getClans();
  }, []);

  return <Main partnersGoods={partnersGoods} tournaments={tournaments} />;
};

export default MainPage;
