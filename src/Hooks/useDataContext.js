import { useContext } from "react";
import { DataContext } from "../Context/DataProvider/DataProvider";

const useDataContext = () => {
    const data=useContext(DataContext)
    return data;
  };
  
  export default useDataContext;