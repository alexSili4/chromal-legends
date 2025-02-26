import { IPartnersGoods } from '@/types/partnersGoods.types';
import HttpService from './http.service';

class AppService extends HttpService {
  constructor() {
    super();
  }

  async getPartnersGoods(): Promise<IPartnersGoods> {
    const response = await this.get<IPartnersGoods>(
      {
        url: 'v1/uk/branches/00000000-0000-0000-0000-000000000000/products?limit=47&offset=0&deliveryType=DeliveryHome&sortBy=productsList&sortDirection=desc&set=chroma-cards',
      },
      false
    );

    return response.data;
  }
}

const appService = new AppService();

export default appService;
