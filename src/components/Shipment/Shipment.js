import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const handleNameBlur = (event) => {
    setEmail(event.target.value);
  };

  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handlePhonedBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleCreateUser = (event) => {
    event.preventDefault();
    const shapping = { name, email, address, phone };
    console.log(shapping);
  };
  return (
    <div className="from-contaoner">
      <div>
        <h1 className="from-taitle"> Shapping Information </h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="name">Your Name</label>
            <input
              onBlur={handleNameBlur}
              type="text"
              name="name"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              type="email"
              name="Email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="passeord"> Your Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone"> Phone Number</label>
            <input
              onBlur={handlePhonedBlur}
              type="text"
              name="Phone"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input
            className="from-submit"
            type="submit"
            value=" Add Shipping"
            required
          />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
