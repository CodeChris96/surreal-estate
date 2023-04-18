import React, { useState } from "react";
import "../styles/sellproperties.css";

const SellProperties = () => {
  const initialState = {
    title: "",
    city: "Manchester",
    type: "Flat",
  };

  const [fields, setFields] = useState(initialState);

  const handleSellProperty = (e) => {
    e.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (e) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  return (
    <div className="sell-properties-container">
      <div className="title">Sell Your Property</div>
      <div className="form-wrapper">
        <form onSubmit={handleSellProperty}>
          <label htmlFor="title">
            Property Title:
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
            />
          </label>
          <br />
          <label htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
          <br />
          <label htmlFor="type">
            Property type:
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terrace</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
          <button type="submit">Sell!</button>
        </form>
        <div className="hero-image" />
      </div>
    </div>
  );
};

export default SellProperties;
