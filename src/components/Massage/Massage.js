import React from "react";
import "./Massage.scss";
import assetONe from "../../Asset/image-amyrobson.png";

export const Massage = () => {
  return (
    <div className="Massage">
      <img src={assetONe}></img>
      <input placeholder=""></input>
      <button> SEND</button>
    </div>
  );
};
