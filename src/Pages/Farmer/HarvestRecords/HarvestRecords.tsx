import { useState } from "react";

const HarvestRecords = () => {
  const [quantity, setQuantity] = useState("");

  return (
    <div>
      <h1>Harvest Records</h1>

      <form>
        <input
          type="text"
          placeholder="Rice Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <button>Add Harvest</button>
      </form>
    </div>
  );
};

export default HarvestRecords;
