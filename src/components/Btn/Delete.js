import React from "react";
import "./Delete.scss";
import { useDispatch } from "react-redux";
import { Reduxselector } from "../../Redux/ReduxSelector";
import { dataaction } from "../../Redux/Sclice";

function Delete(props) {
  const data = Reduxselector();
  let dispatch = useDispatch();

  let temcopy = JSON.parse(JSON.stringify(data));

  let DeleteFuc = (e) => {
    temcopy.comments[props.index].replies = temcopy.comments[
      props.index
    ].replies.filter((item) => item.content !== e.content);
    dispatch(dataaction(temcopy));
  };
  return (
    <button className="DeleteBtn" onClick={() => DeleteFuc(props.e)}>
      Delete
    </button>
  );
}

export default Delete;
