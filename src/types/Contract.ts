import { User, UserRole } from "./User";

export type ContractType = "SELL" | "BUY";

export type ContractStatus =
  | "Open"
  | "Pending"
  | "Accepted"
  | "Rejected"
  | "Completed"
  | "Cancelled";

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
  id?: string;

  title: string;

  contractType: ContractType;

  crop: string;

  quantity: number;

  price: number;

  location: string;

  description: string;

  requirements: string;

  paymentMethod: PaymentMethod;

  startDate: string;

  endDate: string;

  deliveryDate: string;

  creator: User;

  applicants: Applicant[];

  selectedApplicant: Applicant | null;

  agreementId: string | null;

  status: ContractStatus;

  createdAt: string;

  updatedAt: string;
}
