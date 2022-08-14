import { useState } from "react";
import "./style.css";
function EntryForm() {
  const [name, setname] = useState("");
  const [quantity, setquantity] = useState("");
  const [amount, setamount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const record = { name, quantity, amount };
    console.log(record);
    fetch("https://sellsrecord.herokuapp.com/product/create/record", {
      method: "POST",
      header: { "Content-type": "application/json" },
      body: JSON.stringify(record),
    }).then(() => {
      console.log("new record added");
    });
  };

  return (
    <div className="create">
      <h2>Add new record</h2>
      <form onSubmit={handleSubmit}>
        <label>Product name</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <label>Product quantity</label>
        <input
          type="number"
          required
          value={quantity}
          onChange={(e) => setquantity(e.target.value)}
        />
        <label>Total amount</label>
        <input
          type="number"
          required
          value={amount}
          onChange={(e) => setamount(e.target.value)}
        />
        <button>Enter record</button>
      </form>
    </div>
  );
}

export default EntryForm;
