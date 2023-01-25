import { useSelector } from "react-redux";

export const Reduxselector = () => {
    let reduxData = useSelector((state) => state.reducer.data);

  return reduxData
  
};
