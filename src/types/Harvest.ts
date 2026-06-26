export type HarvestStatus = "Growing" | "Ready" | "Harvested" | "Delivered";

export interface Harvest {
  id?: string;

  contractId: string;

  crop: string;

  quantity: number;

  expectedHarvestDate: string;

  actualHarvestDate?: string;

  deliveryDate?: string;

  status: HarvestStatus;

  notes?: string;
}
