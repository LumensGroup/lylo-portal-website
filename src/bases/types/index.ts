export type CommonProps = {
  className?: any;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
  data?: any;
};

export interface SelectedCarDetailProps {
  [key: string]: any;
}
