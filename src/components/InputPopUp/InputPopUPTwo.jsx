import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { dataaction } from "../../Redux/Sclice";
import { Reduxselector } from "../../Redux/ReduxSelector";

const InputPopUPTwo = (props) => {
  const [inpdata, setinpdata] = useState("");

  const data = Reduxselector();
  let dispatch = useDispatch();

  let ReplySub = () => {
    props.setReplyData("");
    let temcopy = JSON.parse(JSON.stringify(data));

    let UpdatedObj = {
      id: 1,
      content: inpdata,
      createdAt: "Now",
      score: 0,
      replyingTo: "ramsesmiron",
      user: {
        image: {
          png: "./images/avatars/image-ramsesmiron.png",
          webp: "./images/avatars/image-ramsesmiron.webp",
        },
        username: "juliusomo",
      },
    };
    temcopy.comments[props.ParendIndex].replies.splice(1, 0, UpdatedObj);
    dispatch(dataaction(temcopy));
  };

  return (
    <div className="IputPopUp">
      <textarea onChange={(e) => setinpdata(e.target.value)}></textarea>
      <button onClick={() => ReplySub()}>REPLY</button>
    </div>
  );
};

export default InputPopUPTwo;
