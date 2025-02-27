export type NavLinkTitle =
  | 'Про гру'
  | 'Суперліга Сільпо'
  | 'Рейтинг'
  | 'Як отримати картки'
  | 'Колекційні набори'
  | 'Ексклюзивні нагороди'
  | 'Правила акції';
export interface INavLink {
  title: NavLinkTitle;
  path: string;
}

export type NavLinks = INavLink[];
