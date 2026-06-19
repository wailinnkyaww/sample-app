import { styles } from "./Styles";
import { ContractCards } from "./ContractCards";

export const contracts = [
  {
    id: 1,
    farmerName: "U Aung Kyaw",
    companyName: "Golden Rice Trading Co., Ltd",
    cropType: "Pawsan Rice",
    quantity: 5000,
    agreedPrice: 26000,
    startDate: "2026-06-01",
    endDate: "2026-11-20",
    status: "Active",
  },
  {
    id: 2,
    farmerName: "Daw Mya Mya",
    companyName: "Myanmar Agro Export",
    cropType: "Emata Rice",
    quantity: 3000,
    agreedPrice: 23000,
    startDate: "2026-05-15",
    endDate: "2026-10-15",
    status: "Pending",
  },
  {
    id: 1,
    farmerName: "U Aung Kyaw",
    companyName: "Golden Rice Trading Co., Ltd",
    cropType: "Pawsan Rice",
    quantity: 5000,
    agreedPrice: 26000,
    startDate: "2026-06-01",
    endDate: "2026-11-20",
    status: "Active",
  },
  {
    id: 2,
    farmerName: "Daw Mya Mya",
    companyName: "Myanmar Agro Export",
    cropType: "Emata Rice",
    quantity: 3000,
    agreedPrice: 23000,
    startDate: "2026-05-15",
    endDate: "2026-10-15",
    status: "Pending",
  },
  {
    id: 1,
    farmerName: "U Aung Kyaw",
    companyName: "Golden Rice Trading Co., Ltd",
    cropType: "Pawsan Rice",
    quantity: 5000,
    agreedPrice: 26000,
    startDate: "2026-06-01",
    endDate: "2026-11-20",
    status: "Active",
  },
  {
    id: 2,
    farmerName: "Daw Mya Mya",
    companyName: "Myanmar Agro Export",
    cropType: "Emata Rice",
    quantity: 3000,
    agreedPrice: 23000,
    startDate: "2026-05-15",
    endDate: "2026-10-15",
    status: "Pending",
  },
];

export default function Contracts() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contract Management</h1>
      <div style={styles.grid}>
        {contracts.map((contract) => (
          <ContractCards key={contract.id} contract={contract} />
        ))}
      </div>
    </div>
  );
}
