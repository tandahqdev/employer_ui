import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface LayoutProps {
  children?: ReactNode;
}

export interface NewPageProps {
  title: string;
  desc: string;
}

export interface NewPageItemsModel extends NewPageProps {
  id: string;
}

interface ActionTitleModel {
  header: string;
  headerColor: string;
  icon: StaticImageData;
}

export interface ActionCardModel extends NewPageProps, ActionTitleModel {
  isShowTopBtn?: boolean;
  btnText: string;
  onClick?: () => void;
  path: string;
}
