export type PaymentStatus = "Pending" | "Paid" | "Failed" | "Refunded";

export interface Payment {
  id?: string;

  contractId: string;

  payerId: string;

  receiverId: string;

  amount: number;

  paymentMethod: "Cash" | "Bank Transfer" | "KBZ Pay" | "Wave Money";

  transactionId?: string;

  status: PaymentStatus;

  paidAt?: string;

  createdAt: string;
}
