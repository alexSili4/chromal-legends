import { IPartnersGoods } from '@/types/partnersGoods.types';
import HttpService from './http.service';
import { ErrorMessages, IGetPrizeFormData } from '@/types/getPrize.types';
import { AxiosResponse } from 'axios';
import { IClans } from '@/types/teams.types';

class AppService extends HttpService {
  constructor() {
    super();
  }

  async getPartnersGoods(): Promise<IPartnersGoods> {
    const response = await this.get<IPartnersGoods>(
      {
        url: 'https://sf-ecom-api.silpo.ua/v1/uk/branches/00000000-0000-0000-0000-000000000000/products?limit=47&offset=0&deliveryType=DeliveryHome&sortBy=productsList&sortDirection=desc&set=chroma-cards',
      },
      false
    );

    return response.data;
  }

  async signUpWinner(
    data: IGetPrizeFormData
  ): Promise<AxiosResponse<ErrorMessages, any>> {
    const response = await this.post<ErrorMessages, IGetPrizeFormData>(
      {
        url: 'https://chroma-prod.sunagency.space/api/index/sign-up-winner',
        data,
      },
      false
    );

    return response;
  }

  async getRating(): Promise<IClans> {
    const response = await this.get<IClans>(
      {
        url: 'https://chroma-prod.sunagency.space/api/index/leader-board',
      },
      false
    );

    return response.data;
  }
}

const appService = new AppService();

export default appService;
