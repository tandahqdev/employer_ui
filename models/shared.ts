import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}

export interface IProps {
  title: string;
  desc: string;
}

export interface NewPageItemsModel extends IProps {
  id: string;
  icon: StaticImageData;
}

interface ActionTitleModel {
  header: string;
  headerColor: string;
  icon: StaticImageData;
}

export interface ActionCardModel extends IProps, ActionTitleModel {
  isShowTopBtn?: boolean;
  btnText: string;
  onClick?: () => void;
  path: string;
}
