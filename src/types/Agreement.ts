export type AgreementStatus = "Pending" | "Signed" | "Rejected" | "Completed";

export interface Agreement {
  id?: string;

  contractId: string;

  ownerId: string;

  applicantId: string;

  terms: string;

  signedByOwner: boolean;

  signedByApplicant: boolean;

  status: AgreementStatus;

  createdAt: string;

  signedAt?: string;
}
