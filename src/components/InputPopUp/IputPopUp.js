import React, { useState } from "react";
import "./InputPopUp.scss";
import { Reduxselector } from "../../Redux/ReduxSelector";
import { useDispatch } from "react-redux";
import { dataaction } from "../../Redux/Sclice";

const IputPopUp = (props) => {
  const [inpdata, setinpdata] = useState("");

  const data = Reduxselector();
  let dispatch = useDispatch();

  let ReplySub = () => {
    props.setReplyData("");

    // deep copy using jason
    let temcopy = JSON.parse(JSON.stringify(data));
    // console.log(temcopy);

    // Updated replay data save in UpdatedObj variable
    let UpdatedObj = {
      id: 1,
      content: inpdata,
      createdAt: "Now",
      score: 0,
      replyingTo: temcopy.comments[props.index].user.username,
      user: {
        image: {
          png: "./images/avatars/image-ramsesmiron.png",
          webp: "./images/avatars/image-ramsesmiron.webp",
        },
        username: "juliusomo",
      },
    };
    // Updated replay data
    temcopy.comments[props.index].replies = [
      UpdatedObj, ...temcopy.comments[props.index].replies,
      ];
    dispatch(dataaction(temcopy));
  };
  return (
    <div className="IputPopUp">
      <textarea onChange={(e) => setinpdata(e.target.value)}></textarea>
      <button onClick={() => ReplySub()}>REPLY</button>
    </div>
  );
};

export default IputPopUp;
