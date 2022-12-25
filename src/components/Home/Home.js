import React from "react";
import { Reduxselector } from "../../Redux/ReduxSelector";
import Reply from "../Replay/Reply";
import "./Home.scss";
import assetONe from "../../Asset/image-amyrobson.png";
import { Massage } from "../Massage/Massage";

const Home = () => {
  const data = Reduxselector();

  console.log(data.comments);
  return (
    <div className="Home ">
      {data.comments.map((e, i) => (
        <div key={i}>
          <div className="cart">
            {/* bnt section */}
            <section className="butSection">
              <h4>+</h4>
              <p>{e.score}</p>
              <h4>-</h4>
            </section>
            {/* aavtar section */}
            <section className="avatar">
              {/* <img src="../../Asset/image-amyrobson.png"></img> */}
              <div className="heateeFlex">
                <div className="heater">
                  <img src={assetONe}></img>
                  <span className="userName">{e.user.username}</span>
                  <span className="Date">{e.createdAt}</span>
                </div>
                <span className="Reply">Reply</span>
              </div>
              <h5>{e.content} </h5>
            </section>
          </div>
          <Reply e={e} />
        </div>
      ))}
      <Massage />
    </div>
  );
};

export default Home;
