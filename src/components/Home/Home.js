import React, { useState } from "react";
import { Reduxselector } from "../../Redux/ReduxSelector";
import Reply from "../Replay/Reply";
import "./Home.scss";
import assetONe from "../../Asset/image-amyrobson.png";
import { Massage } from "../Massage/Massage";
import IputPopUp from "../InputPopUp/IputPopUp";
import { useDispatch } from "react-redux";
import { dataaction } from "../../Redux/Sclice";

const Home = () => {
  const data = Reduxselector();
  let dispatch = useDispatch();

  // console.log(data);
  const [ReplyData, setReplyData] = useState(""),
    [IndexV, setInsedexV] = useState("");

  let replyFuc = (e, i) => {
    setReplyData(e);
    setInsedexV(i);
  };

  let temcopy = JSON.parse(JSON.stringify(data));

  let score = (data, index) => {
    if (data == "decrement" && temcopy.comments[index].score > 0) {
      temcopy.comments[index].score = --temcopy.comments[index].score;
      dispatch(dataaction(temcopy));
    } else if (data == "increment") {
      temcopy.comments[index].score = ++temcopy.comments[index].score;
      dispatch(dataaction(temcopy));
    }
  };

  return (
    <div className="Home ">
      <div className="scroll">
      {data.comments.map((e, i) => (
        <div key={i} >
          <div className="cart">
            {/* bnt section */}
            <section className="butSection">
              <button className="btn" onClick={() => score("increment", i)}>
                +
              </button>
              <p>{e.score}</p>
              <button className="btn" onClick={() => score("decrement", i)}>
                -
              </button>
            </section>
            {/* aavtar section */}
            <section className="avatar">
              <div className="heateeFlex">
                <div className="heater">
                  <img src={assetONe}></img>
                  <span className="userName">{e.user.username}</span>
                  <span className="Date">{e.createdAt}</span>
                </div>
                <button className="Reply" onClick={() => replyFuc(e, i)}>
                  Reply
                </button>
              </div>
              <h5>{e.content} </h5>
            </section>
          </div>
          {/* < IputPopUp /> */}
          {ReplyData.id == e.id ? (
            <IputPopUp setReplyData={setReplyData} index={IndexV} />
          ) : (
            <></>
          )}
          <Reply e={e} index={i} />
        </div>
      ))}
      </div>
      {/* <Massage /> */}
    </div>
  );
};

export default Home;
