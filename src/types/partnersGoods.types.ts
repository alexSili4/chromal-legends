export interface IPromotion {
  id: string;
  iconPath: string;
  type: string;
  classActivity: null;
}

export type Promotions = IPromotion[];

export interface IPartnersGood {
  id: string;
  title: string;
  icon: string;
  price: number;
  oldPrice: number;
  offerId: string;
  ratio: string;
  sectionSlug: string;
  companyId: string;
  branchId: string;
  externalProductId: number;
  promotions: Promotions;
  specialPrices: [];
  createdAt: string;
  slug: string;
  addToBasketStep: number;
  stock: number;
  displayPrice: number;
  displayOldPrice: number;
  displayRatio: string;
  guestProductRating: number;
  guestProductRatingCount: number;
  classifierSapId: string;
  originType: null;
  brandId: string;
  brandTitle: string;
  weighted: boolean;
  blurForUnderAged: boolean;
  modifier: null;
}

export type PartnersGoods = IPartnersGood[];

export interface IPartnersGoods {
  limit: number;
  offset: number;
  total: number;
  items: PartnersGoods;
}
