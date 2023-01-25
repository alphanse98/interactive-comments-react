import React, { useState } from "react";
import "./Reply.scss";
import Delete from "../Btn/Delete";
import EditBtn from "../EditBtn/EditBtn";
import assetONe from "../../Asset/image-amyrobson.png";
import { useDispatch } from "react-redux";
import { Reduxselector } from "../../Redux/ReduxSelector";
import { dataaction } from "../../Redux/Sclice";
// import IputPopUp from "../InputPopUp/IputPopUp"; 
import InputPopUPTwo from "../InputPopUp/InputPopUPTwo";
function Reply(props) {

  console.log('re',props);
  let [EditData, setEditData] = useState("");
  let [EditIndex, setEditIndex] = useState(null);


  const [ReplyData, setReplyData] = useState(""),
  [IndexV, setInsedexV] = useState("");

  let replyFuc = (e, i) => {
    setReplyData(e);
    setInsedexV(i);
    console.log(e);
  };

  const data = Reduxselector();
  let dispatch = useDispatch();
  const Replydata = props.e.replies;


  let onChangeData = (e) => {
    setEditData((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  let temcopy = JSON.parse(JSON.stringify(data));

  let score = (data, index) => {
    if (
      data == "decrement" &&
      temcopy.comments[props.index].replies[index].score > 0
    ) {
      temcopy.comments[props.index].replies[index].score = --temcopy.comments[
        props.index
      ].replies[index].score;
      dispatch(dataaction(temcopy));
    } else if (data == "increment") {
      temcopy.comments[props.index].replies[index].score = ++temcopy.comments[
        props.index
      ].replies[index].score;
      dispatch(dataaction(temcopy));
    } else if (data == "Update") {
      temcopy.comments[props.index].replies[EditIndex] = EditData;
      dispatch(dataaction(temcopy));
      setEditIndex(null);
    }
  };
  return (
    <div className="Reply">
      {Replydata?.map((e, i) => (
        <div key={i}>
          <div className="cart">
            {/* bnt section */}
            <section className="butSection">
              <button className="btn" onClick={() => score("increment", i)}>
                +
              </button>
              <p>{e?.score}</p>
              <button className="btn" onClick={() => score("decrement", i)}>
                -
              </button>
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
                    className={
                      e?.user?.username === "juliusomo" ? "you" : "none"
                    }
                  >
                    You
                  </span>

                  <span className="Date">{e?.createdAt}</span>
                </div>
                {e?.user?.username === "juliusomo" ? (
                  <span>
                    <Delete index={props.index} replyIndex={i} e={e} />
                    <EditBtn
                      e={e}
                      setEditData={setEditData}
                      setEditIndex={setEditIndex}
                      ChildIndex={i}
                    />
                  </span>
                ) : (
                  <button className="Reply" onClick={() => replyFuc(e, i)}>Reply</button>
                )}
              </div>
              <div className={EditIndex == i ? "none" : ""}>
                <span className="replyingTo">@{e?.replyingTo} </span>
                <span className="content">{e?.content}</span>
              </div>
              <div className={EditIndex == i ? "" : "none"}>
                <textarea
                  value={EditData.content}
                  className="replyText"
                  name="content"
                  onChange={onChangeData}
                ></textarea>
                <button className="UpdateBtn" onClick={() => score("Update")}>
                  Update
                </button>
              </div>
            </section>
          </div>
          {ReplyData.id == e.id? <InputPopUPTwo setReplyData={setReplyData} ParendIndex={props.index} setEditData={setEditData} ChildIndex={i}/>: <></>}
          
 
        </div>
        
      ))}
    </div>
  );
}

export default Reply;
