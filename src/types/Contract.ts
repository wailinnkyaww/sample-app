import type { User, UserRole } from "./User";

export type ContractType = "SELL" | "BUY";

export type ContractStatus = "Open" | "Pending" | "Closed";

export type PaymentMethod = "Cash" | "Bank Transfer" | "KBZ Pay" | "Wave Money";

export interface Applicant {
  uid: string;
  fullName: string;
  email: string;
  role: UserRole;
  appliedAt: string;
  status: "Pending" | "Accepted" | "Rejected";
}

export interface Contract {
  id: string;

  title: string;
  crop: string;
  variety: string;

  farmer: string;
  farmerId: string;

  location: string;

  quantity: number;
  unit: string;

  price: number;

  deliveryDate: string;

  image: string;

  description: string;

  requirements: string[];

  status: ContractStatus;

  createdAt: string;
}
