import "./styles.css";
import { useState } from "react";

export default function App() {
  const [tabNumber, setTabNumber] = useState(1);

  const handleClick = (tab) => {
    setTabNumber(tab);
  };

  return (
    <div className="App">
      <h1>About Us</h1>
      <div className="continer">
        <div className="app-button">
          <button
            className={tabNumber === 1 && "active"}
            onClick={() => handleClick(1)}
          >
            Who Are We
          </button>
          <button
            className={tabNumber === 2 && "active"}
            onClick={() => handleClick(2)}
          >
            What We Do
          </button>
          <button
            className={tabNumber === 3 && "active"}
            onClick={() => handleClick(3)}
          >
            Contact Us
          </button>
        </div>
        <div className="tab-continer">
          <div className={tabNumber === 1 ? "show tab-data" : "tab-data"}>
            <h4>Who We are</h4>
            <p>
              Lorem ipsum dolor jmet commodi consectetur adipisicing elit.
              Provident veniam facilis commodi neque consectetur eveniet
              aspernatur quaerat voluptates quos ipsa, iste quisquam ?
            </p>
          </div>
          <div className={tabNumber === 2 ? "show tab-data" : "tab-data"}>
            <h4>What We Do</h4>
            <p>
              Lorem ipsum dolor sit gmep consectetur adipisicing elit.
              Distinctio omnis impedit reprehenderit dolores eum animi natus
              sunt, esse explicabo, laboriosam eveniet doloribus!
            </p>
          </div>
          <div className={tabNumber === 3 ? "show tab-data" : "tab-data"}>
            <h4>Contact Us</h4>
            <p>
              Lorem ipsum dolor, amet adipisicing elit. Dolorem tempore beatae
              veritatiselit placeat reprehenderit omnis corrupti elit deserunt
              voluptas necessitatibus distinctio atque?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
