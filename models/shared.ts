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