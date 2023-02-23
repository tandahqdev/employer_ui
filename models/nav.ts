import { IconType } from 'react-icons/lib';

export interface LinkItemProps {
  name: string;
  icon?: IconType;
  route?: string;
  children?: LinkItemProps[];
}


export interface DashSidebarProps {
  onClose?: () => void;
  linkItems: LinkItemProps[];
  bottomItem?: {
    icon: IconType;
    text: string;
    route: string;
  };
  bottomItem2?: {
    icon: IconType;
    text: string;
  };
}