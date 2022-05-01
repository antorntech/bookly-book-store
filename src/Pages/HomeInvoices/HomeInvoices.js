import React from "react";
import useInventory from "../../hooks/useInventory/useInventory";
import HomeInvoice from "../HomeInvoice/HomeInvoice";
import "./HomeInvoices.css";

const HomeInvoices = () => {
  const [invoices, setInvoices] = useInventory();
  return (
    <div className="container py-3 py-lg-5">
      <header className="text-center pb-lg-5 pb-3">
        <h2>
          <span id="span">I</span>
          <span id="span">N</span>
          <span id="span">V</span>
          <span id="span">O</span>
          <span id="span">I</span>
          <span id="span">C</span>
          <span id="span">E</span>
          <span id="span">S</span>
        </h2>
        <div
          style={{
            width: "150px",
            borderBottom: "3px solid var(--green)",
            margin: "0 auto",
          }}
        ></div>
      </header>
      <div className="row row-cols-1 row-cols-lg-3 pt-3 g-4">
        {invoices.slice(0, 3).map((invoice) => (
          <HomeInvoice key={invoice.id} invoice={invoice}></HomeInvoice>
        ))}
      </div>
    </div>
  );
};

export default HomeInvoices;
