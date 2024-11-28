import * as React from "react";
import { createRoot } from "react-dom/client";
import { initFlowbite } from "flowbite";
import "../styles/styles.css";

const Index = () => {
  React.useEffect(() => {
    initFlowbite();
  });

  return (
    <>
      <div
        className="container sm:mx-auto px-5 max-w-screen-xl"
        style={{ paddingTop: 135 }}
      >
        This is the IDP home page
      </div>
    </>
  );
};

const root = document.getElementById("page-root");
createRoot(root).render(<Index />);
