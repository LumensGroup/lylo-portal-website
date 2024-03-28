export type GoogleAnalyticsPayload = {
  eventName: string;
  screenName: string;
  parameters?: any;
};

export interface DynamicAddon {
  [key: string]: any;
}
