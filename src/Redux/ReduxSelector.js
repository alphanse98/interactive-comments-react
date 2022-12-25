import { useSelector } from "react-redux";

export const Reduxselector = () => {
    const reduxData = useSelector((state) => state.reducer.data);

  return reduxData
  
};
