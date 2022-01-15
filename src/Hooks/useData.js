import { useEffect, useState } from "react";
import data from "../Data/Data";
import DateGraph from '../assets/images/report-graph.png';

const useData = () => {
  const breakdownItems = [
    {
      id: 1,
      value: "browser",
      label: "browser",
    },
    {
      id: 2,
      value: "country",
      label: "country",
      
    },
    {
      id: 3,
      value: "date",
      label: "date",
      date:['dTE']
    },
  ];

  const dates = [DateGraph, DateGraph, DateGraph, DateGraph]

  const [breakdown, setBreakdown] = useState(breakdownItems);
  const breakdownData = data;

  const [browsers, setBrowsers] = useState([]);

  const [countries, setCountries] = useState([]);

  const [checked, setChecked] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);

  const [checkedBrowserValue, setCheckedBrowserValue] = useState([]);
  const [checkedCountriesValue, setCheckedCountriesValue] = useState([]);

  useEffect(()=>{
      fetch('browsers.json')
      .then(res=>res.json())
      .then(data => setBrowsers(data))
  },[checkedBrowserValue])

  
  useEffect(()=>{
     fetch('countries.json')
    .then(res=>res.json())
    .then(data=> setCountries(data))
  },[checkedCountriesValue])  

  console.log(browsers)

  return {
    breakdownData,
    setBreakdown,
    breakdownItems,
    breakdown,
    browsers,
    countries,
    dates,
    checked,
    setChecked,
    selectedValues,
    setSelectedValues,
    checkedBrowserValue,
    setCheckedBrowserValue,
    checkedCountriesValue,
    setCheckedCountriesValue

  };
};

export default useData;
