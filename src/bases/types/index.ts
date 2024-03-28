export type CommonProps = {
  className?: any;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  data?: any;
};

export interface SelectedCarDetailProps {
  [key: string]: any;
}

export interface CarDetails {
  item_id: string;
}

export interface AddonItem {
  add_on_option_id: string;
  value: string;
  quantity: number;
}
