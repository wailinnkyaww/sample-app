import { useEffect, useState } from "react";
import "./Contracts.css";

import ContractCard from "./ContractCard/ContractCard";
import ContractFilter from "./ContractFilter/ContractFilter";
import ContractDetails from "./ContractDetails/ContractDetails";
import CreateContractModal from "./CreateContractModal/CreateContractModal";
import type { Contract } from "../../types/Contract";

interface Contract {
  id: string;
  title: string;
  crop: string;
  farmer: string;
  location: string;
  quantity: number;
  unit: string;
  price: number;
  deliveryDate: string;
  image: string;
  status: string;
}

const Contracts = () => {
  const [contracts, setContracts] = useState<Contract[]>([]);

  // Filter States
  const [search, setSearch] = useState("");
  const [crop, setCrop] = useState("");
  const [status, setStatus] = useState("");
  const [location, setLocation] = useState("");
  //contractdetails
  const [selectedContract, setSelectedContract] = useState<Contract | null>(
    null,
  );
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const handleCreateContract = (newContract: Contract) => {
    setContracts((prev) => [newContract, ...prev]);
  };

  useEffect(() => {
    // Fake data (replace with Firebase later)
    setContracts([
      {
        id: "1",
        title: "Premium Rice Contract",
        crop: "Rice",
        variety: "Paw San Hmwe",
        farmer: "Ko Aung",
        farmerId: "farmer001",
        location: "Yangon",
        quantity: 5000,
        unit: "Kg",
        price: 0.55,
        deliveryDate: "2026-08-10",
        image:
          "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
        description: "Premium export quality rice.",
        requirements: ["Organic", "Quality Inspection"],
        status: "Open",
        createdAt: new Date().toISOString(),
      },
      {
        id: "2",
        title: "Corn Supply Contract",
        crop: "Corn",
        farmer: "Mg Tun",
        location: "Mandalay",
        quantity: 3000,
        unit: "Kg",
        price: 0.42,
        deliveryDate: "2026-09-15",
        image:
          "https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800",
        status: "Open",
      },
      {
        id: "3",
        title: "Fresh Tomato Contract",
        crop: "Tomato",
        farmer: "Ma Su",
        location: "Bago",
        quantity: 1500,
        unit: "Kg",
        price: 0.75,
        deliveryDate: "2026-07-30",
        image:
          "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=800",
        status: "Pending",
      },
      {
        id: "4",
        title: "Potato Harvest Contract",
        crop: "Potato",
        farmer: "Ko Zaw",
        location: "Shan State",
        quantity: 6000,
        unit: "Kg",
        price: 0.48,
        deliveryDate: "2026-10-05",
        image:
          "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=800",
        status: "Closed",
      },
      {
        id: "5",
        title: "Bean Export Contract",
        crop: "Beans",
        farmer: "Daw Mya",
        location: "Magway",
        quantity: 4500,
        unit: "Kg",
        price: 0.67,
        deliveryDate: "2026-09-20",
        image:
          "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=800",
        status: "Open",
      },
    ]);
  }, []);

  const handleApply = (id: string) => {
    alert(`Applied to Contract ${id}`);
  };

  const handleView = (id: string) => {
    const contract = contracts.find((item) => item.id === id);

    if (contract) {
      setSelectedContract(contract);
    }
  };

  // Filter Logic
  const filteredContracts = contracts.filter((contract) => {
    const matchSearch =
      search === "" ||
      contract.title.toLowerCase().includes(search.toLowerCase()) ||
      contract.farmer.toLowerCase().includes(search.toLowerCase());

    const matchCrop = crop === "" || contract.crop === crop;

    const matchStatus = status === "" || contract.status === status;

    const matchLocation =
      location === "" ||
      contract.location.toLowerCase().includes(location.toLowerCase());

    return matchSearch && matchCrop && matchStatus && matchLocation;
  });

  return (
    <div className="contracts-page">
      <div className="contracts-header">
        <h1>Available Contracts</h1>
        <p>Browse available farming contracts and apply.</p>
        <button
          className="create-contract-btn"
          onClick={() => setIsCreateModalOpen(true)}
        >
          + Create Contract
        </button>
      </div>

      <ContractFilter
        search={search}
        crop={crop}
        status={status}
        location={location}
        onSearchChange={setSearch}
        onCropChange={setCrop}
        onStatusChange={setStatus}
        onLocationChange={setLocation}
      />

      {filteredContracts.length === 0 ? (
        <div className="empty-state">
          <h2>No Contracts Found</h2>
          <p>Try changing your search or filters.</p>
        </div>
      ) : (
        <div className="contracts-grid">
          {filteredContracts.map((contract) => (
            <ContractCard
              key={contract.id}
              contract={contract}
              onApply={handleApply}
              onView={handleView}
            />
          ))}
        </div>
      )}
      <ContractDetails
        contract={selectedContract}
        onClose={() => setSelectedContract(null)}
        onApply={handleApply}
      />
      <CreateContractModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreate={handleCreateContract}
      />
    </div>
  );
};

export default Contracts;
