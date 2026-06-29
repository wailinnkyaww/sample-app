export interface Contract {
  id: string;
  agreementId: string | null;
  applicants: any[];
  contractType: string;
  crop: string;
  deliveryDate: string;
  description: string;
  endDate: string;
  location: string;
  paymentMethod: string;
  price: number;
  quantity: number;
  requirements: string;
  selectedApplicant: string | null;
  startDate: string;
  status: string;
  title: string;
  createdAt: string;
  updatedAt: string;
  farmerId?: string;
  farmer?: string;
  image?: string;
}
