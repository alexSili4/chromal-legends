export interface IGetPrizeFormData {
  code: string;
  name: string;
  phone: string;
  topPlacement: string;
  clan: string;
}

export interface IErrorMessage {
  field: string;
  message: string;
}

export type ErrorMessages = IErrorMessage[];
