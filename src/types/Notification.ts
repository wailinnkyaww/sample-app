export type NotificationType =
  | "Contract"
  | "Application"
  | "Agreement"
  | "Payment"
  | "Harvest"
  | "System";

export interface Notification {
  id?: string;

  userId: string;

  title: string;

  message: string;

  type: NotificationType;

  isRead: boolean;

  createdAt: string;
}
