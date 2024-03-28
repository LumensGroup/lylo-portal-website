export interface FilterCondition {
  sale_price: number[];
  seating_category: number[];
  vehicle_type_category: number[];
}

export interface FilterItem {
  value: string;
  label: string;
}

export interface FilterConditionState {
  [key: string]: FilterItem[];
}
