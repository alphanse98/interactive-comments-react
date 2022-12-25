import React from "react";
import "./Reply.scss";
import Delete from "../Btn/Delete";
import EditBtn from "../EditBtn/EditBtn";
import assetONe from "../../Asset/image-amyrobson.png";


function Reply(props) {
  console.log(props.e.replies);
  const Replydata = props.e.replies;
  return (
    <div className="Reply">
      {Replydata?.map((e, i) => (
        <div key={i}>
          <div className="cart">
            {/* bnt section */}
            <section className="butSection">
              <h4>+</h4>
              <p>{e?.score}</p>
              <h4>-</h4>
            </section>
            {/* aavtar section */}
            <section className="avatar">
              {/* <img src="../../Asset/image-amyrobson.png"></img> */}
              <div className="heateeFlex">
                <div className="heater">
                  <img src={assetONe}></img>
                  <span className="userName">{e?.user?.username}</span>
                  {/* {e?.user?.username} == {"juliusomo"}? */}

                  <span
                    className={e?.user?.username === "juliusomo" ? "you" : "none"}
                  >
                    You
                  </span>

                  <span className="Date">{e?.createdAt}</span>
                </div>
                {e?.user?.username === "juliusomo" ? (<span><Delete/><EditBtn/></span>) : (<span className="Reply">Reply</span>)}
                
              </div>
              <span className="replyingTo">@{e?.replyingTo} </span>
              <span className="content">{e?.content}</span>
            </section>
          </div>
          
          {/* <Reply e={e} /> */}
        </div>
      ))}
      
    </div>
  );
}

export default Reply;
