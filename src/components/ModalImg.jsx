import React, { useContext, useEffect } from "react";
import AppContext from "../context/AppContext";

function ModalImg() {
  const { modalImg, imgModalToggle } = useContext(AppContext);

  return (
    <div
      className="modal-img flex justify-center items-center px-[15px] fixed top-[0] left-[0] w-full h-[100vh] z-[150] bg-[#2c2b2b65]"
      onClick={imgModalToggle}
    >
      <img
        width={600}
        height={600}
        src={modalImg}
        className="max-w-[600px] w-full h-auto"
        alt="image"
      />
    </div>
  );
}

export default ModalImg;
