import { useEffect, useState } from "react";
import "./Contracts.css";

import ContractCard from "./ContractCard/ContractCard";
import ContractFilter from "./ContractFilter/ContractFilter";
import ContractDetails from "./ContractDetails/ContractDetails";
import CreateContractModal from "./CreateContractModal/CreateContractModal";
import { getContracts } from "../../services/contractService";
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
    const fetchContracts = async () => {
      try {
        const data = await getContracts();
        setContracts(data);
      } catch (error) {
        console.error("Error fetching contracts:", error);
      }
    };

    fetchContracts();
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
      contract.title.toLowerCase().includes(search.toLowerCase());

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
