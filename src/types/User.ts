export type UserRole = "Farmer" | "Buyer" | "Admin";

export interface User {
  uid: string;
  fullName: string;
  email: string;
  phone?: string;
  role: UserRole;
  photoURL?: string;
  address?: string;
  createdAt: string;
}
