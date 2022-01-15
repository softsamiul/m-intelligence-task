import React, { useState } from "react";
import Select from "react-dropdown-select";
import ArrowDown from "../../assets/images/arrow-down.png";
import SearchIcon from "../../assets/images/search-icon.png";
import Fade from "react-reveal/Fade";
import "./DashboardHome.scss";
import useDataContext from "../../Hooks/useDataContext";

const DashboardHome = () => {
  // const [selectedValues, setSelectedValues] = useState([]);
  // const [checked, setChecked] = useState(false);

  const {
    data,
    breakdown,
    setBreakdown,
    breakdownItems,
    browsers,
    countries,
    dates,
    checked,
    setChecked,
    selectedValues,
    setSelectedValues,
  } = useDataContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = e.target.value;
    return result;
  };
  // Declaring option for top breakdown section
  const options = [
    {
      id: 1,
      value: "browser",
      label: "browser",
      browser: ["chrome", "safari", "firefox", "edge"],
    },
    {
      id: 2,
      value: "country",
      label: "country",
      country: ["india", "United State", "United Kingdom"],
    },
    {
      id: 3,
      value: "date",
      label: "date",
      date: ["dTE"],
    },
  ];

  const [checkedBrowserValue, setCheckedBrowserValue] = useState([]);
  const [checkedCountriesValue, setCheckedCountriesValue] = useState([]);
  const [checkedDateValue, setCheckedDateValue] = useState([]);

  //   Handle Browser filter
  const handleBrowserFilter = (e) => {
    const isChecked = e.target.checked;
    const uniqueBrowser = [];
    const val = e.target.name;
    if (isChecked) {
      setCheckedBrowserValue([...checkedBrowserValue, val]);
    } else {
      checkedBrowserValue.pop();
    }
  };

  // Uniqify array
    const uniqueBrowser = checkedBrowserValue.filter(elem => elem.indexOf(checkedBrowserValue) === -1);
    const uniqueCountry = checkedCountriesValue.filter(elem => elem.indexOf(checkedCountriesValue) === -1);
    const uniqueDate = checkedDateValue.filter(elem => elem.indexOf(checkedDateValue) === -1);

  //   Handle Country filter
  const handleCountryFilter = (e) => {
    const isChecked = e.target.checked;
    const val = e.target.name;
    if (isChecked) {
      setCheckedCountriesValue([...checkedCountriesValue, val]);
    } else {
      checkedCountriesValue.pop();
    }
  };

  //   Handle Date filter

  const handleDateFilter = (e) => {
    setCheckedDateValue(dates);
  };

  return (
    <div
      className="dashboard-wrapper-main"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      {/* <Fade bottom> */}
        {/* Dashboard top breakdown section */}
        <div>
          <h4 className="dashboard-top-heading-text">
            Leads unique by Email Address
          </h4>
          <div className="dashboard-top-search-area">
            <form onSubmit={handleSubmit}>
              <Select
                multi
                options={options}
                values={[]}
                onChange={(value) => setSelectedValues(value)}
              />
            </form>
          </div>
        </div>
        {/* Dashboard main section */}
        <div className="dashboard-main-wrapper">
          {/* Dashboard top row */}
          <div className="dashboard-top-row">
            {/* Calender */}
            <div className="dashboard-top-left">
              <div className="calender-wrap">
                <input className="date-picker" type="date" />
                <button className="compare-btn">Compare</button>
              </div>
            </div>
            <div className="dashboard-top-right">
              <div className="label-wrap">
                <span className="groupedby-label">Grouped By:</span>
              </div>
              {/* Country */}
              <div className="country-wrap-outer ">
                <div className="country-wrapper-grp">
                  <input
                    className="country-inp"
                    type="text"
                    placeholder="Country"
                  />
                  <img src={ArrowDown} alt="Arrow down" />
                </div>
              </div>
              {/* Stacked Bar */}
              <div className="stacked-bar-wrap ">
                <div className="stacked-wrap-inner">
                  <input
                    className="stackedbar-inp"
                    type="text"
                    placeholder="Stacked Bar"
                  />
                  <img src={ArrowDown} alt="Arrow down" />
                </div>
              </div>
            </div>
          </div>
          {/* Dashboard main content */}
          <div className="dashboard-main-content-wrapper">
            {/* sidebar nav */}
            <div className="sidebar-wrap">
              <div>
                <div className="inside-content-search">
                  <img
                    className="search-icon-img"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                  <input
                    className="search-input-inside"
                    type="text"
                    placeholder="Search..."
                  />
                </div>
              </div>
              {/* dividier */}
              <div className="siderbar-divider"></div>
              <ul className="ul-self ul-outer">
                <li className="browser-item-wrap">
                  Browser
                  <ul className="ul-self ul-inner">
                    {browsers.map((elem) => (
                      <li key={elem}>
                        <input
                          type="checkbox"
                          id={elem}
                          name={elem}
                          value="text"
                          onChange={handleBrowserFilter}
                        />
                        <label htmlFor={elem}>{elem}</label>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  {/* dividier */}
                  <div className="siderbar-divider browser-item-wrap"></div>
                  Country
                  <ul className="ul-self ul-inner">
                    {countries.map((elem) => (
                      <li key={elem}>
                        <input
                          type="checkbox"
                          id={elem}
                          name={elem}
                          value="text"
                          onChange={handleCountryFilter}
                        />
                        <label htmlFor={elem}>{elem}</label>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* dividier */}
                <div className="siderbar-divider"></div>
                <li onClick={handleDateFilter} className="browser-item-wrap">Date</li>
              </ul>
            </div>
            {/* main content */}
            <div className="main-content-wrap">
              {/* Browser */}
              {selectedValues.length
                ? selectedValues.find((elem) => elem.value === "browser") && (
                    <div className="browser-wrap">
                      <h2 className="main-content-head">Browser</h2>
                      {!uniqueBrowser.length
                        ? browsers.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))
                        : uniqueBrowser.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))}
                    </div>
                  )
                : options.find((elem) => elem.value === "browser") && (
                    <div className="browser-wrap">
                      <h2 className="main-content-head">Browser</h2>
                      {!uniqueBrowser.length
                        ? browsers.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))
                        : uniqueBrowser.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))}
                    </div>
                  )}
              {/* Country */}
              {selectedValues.length
                ? selectedValues.find((elem) => elem.value === "country") && (
                    <div className="country-wrap">
                      <h2 className="main-content-head">Country</h2>

                      {!checkedCountriesValue.length
                        ? countries.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))
                        : checkedCountriesValue.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))}
                    </div>
                  )
                : options.find((elem) => elem.value === "country") && (
                    <div className="country-wrap">
                      <h2 className="main-content-head">Country</h2>

                      {!checkedCountriesValue.length
                        ? countries.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))
                        : checkedCountriesValue.map((elem) => (
                            <div className="item-single" key={elem}>
                              <p>{elem}</p>
                              <div className="content-section-divider"></div>
                            </div>
                          ))}
                    </div>
                  )}
              {/* Dates */}
              {selectedValues.length
                ? selectedValues.find((elem) => elem.value === "date") && (
                    <div className="dates-wrap">
                      <h2 className="main-content-head">Date</h2>
                      {!checkedDateValue.length
                        ? dates.map((elem) => (
                            <div key={elem}>
                              <img
                                className="data-img"
                                src={elem}
                                alt="Data Graph"
                              />
                            </div>
                          ))
                        : checkedDateValue.map((elem) => (
                            <div key={elem}>
                              <img
                                className="data-img"
                                src={elem}
                                alt="Data Graph"
                              />
                            </div>
                          ))}
                    </div>
                  )
                : options.find((elem) => elem.value === "date") && (
                    <div className="dates-wrap">
                      <h2 className="main-content-head">Date</h2>
                      {!checkedDateValue.length
                        ? dates.map((elem) => (
                            <div key={elem}>
                              <img
                                className="data-img"
                                src={elem}
                                alt="Data Graph"
                              />
                            </div>
                          ))
                        : checkedDateValue.map((elem) => (
                            <div key={elem}>
                              <img
                                className="data-img"
                                src={elem}
                                alt="Data Graph"
                              />
                            </div>
                          ))}
                    </div>
                  )}
            </div>
          </div>
        </div>
      {/* </Fade> */}
    </div>
  );
};

export default DashboardHome;
