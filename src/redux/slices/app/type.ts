export type IPlan = {
  tags: Array<string>;
  _id: string;
  name: string;
  price: number;
  creditProfileTokens: number;
  askVidaTokens: number;
  createdAt: string;
  isFree?: boolean;
  isBasic?: boolean;
  isPremium?: boolean;
  isTopUp?: boolean;
  interval: "monthly" | "annually";
  provider: string;
  planCode: string;
  model: string;
  __v: number;
  priceUSD: number;
  updatedAt: string;
};

export type ITopUp = IPlan;

export type IBilling = {
  _id: string;
  planId: {
    _id: string;
    name: string;
    price: number;
  };
  status: string;
  startDate?: string;
  endDate?: string;
  createdAt: string;
  amount: number;
};

export type IDeveloperInfo = {
  _id: string;
  name: string;
  clientId: string;
  clientSecret: string;
  webhookUrl: string;
  redirectUris: string[];
  isDefaultClient: boolean;
};
