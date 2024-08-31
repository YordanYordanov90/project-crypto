"use client";
import { ClipLoader } from "react-spinners";
const Spinner = () => {
  const override = {
    display: "block",
    margin: "100px auto",
  };
  return (
    <ClipLoader
      cssOverride={override}
      className="m-auto"
      color="#36d7b7"
      size={150}
    />
  );
};

export default Spinner;
