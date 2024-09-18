import React, { useEffect, useState } from "react";
import "./Locator.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getAllUserProfile } from "../../../Redux/features/user/Action";
import { IoSearch } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import Table from "../Table/Table";
import ListDataTable from "../Table/ListDataTable";

const Locator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const { AllUser, user, isLoding, error } = auth;
  const Jwt = localStorage.getItem("token");
  const [search, setSearch] = useState("");
  const [filterUser, setfilterUser] = useState("");
  const [showSuggetion, setshowSuggetion] = useState(false);
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    if (Jwt) {
      dispatch(getAllUserProfile());
    }
  }, [Jwt]);

  const handleChange = (value) => {
    setSearch(value);
    filterUserData(value);
    setshowSuggetion(true);
  };

  const filterUserData = (value) => {
    if (!value) {
      setfilterUser(AllUser);
      return;
    }
    const lowerCaseValue = value.trim().toLowerCase();
    const filteredResults =
      AllUser &&
      AllUser.filter((user) => {
        if (user) {
          const NAME = user.NAME ? user.NAME.toLowerCase().trim() : "";
          return NAME.includes(lowerCaseValue);
        }
        return false;
      });
    setfilterUser(filteredResults);
  };

  const columns = [
    {
      field: "EMPID",
      headerName: "Workforce EMP-ID",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: (params) => (
        <Link to={`/products/${params.row._id}`}>{params.value}</Link>
      ),
    },
    {
      field: "NAME",
      headerName: "Workforce Name",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "EMAIL_ID",
      headerName: "EMAIL ID",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
    {
      field: "UserDesc",
      headerName: "UserDesc",
      headerAlign: "center",
      align: "center",
      flex: 1,
    },
   
    
  ];

  const JQueryColumns = [
    { title: "Workforce ID", rowData: "EMPID" },
    { title: "NAME", rowData: "NAME" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "Designation", rowData: "UserDesc" },
    { title: "Designation", rowData: "UserDesc" },
    { title: "Designation", rowData: "UserDesc" },
    { title: "NAME", rowData: "NAME" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
    { title: "EMAIL", rowData: "EMAIL_ID" },
  ];
  return (
    <>
      {advanceSearch ? (
        <>
          <div className="mt-4 mx-2">
            <Table data={AllUser} columns={columns} />
          </div>
          <div className="mt-4 mx-2">
            <ListDataTable
              data={AllUser}
              columnData={JQueryColumns}
              Navigate="true"
              baseURL="/productsasdsadsada/"
            />
          </div>
        </>
      ) : (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-9 col-sm-12 position-relative">
              <a
                onClick={() => setAdvanceSearch(true)}
                className="text-primary advanced-search-btn"
              >
                Advanced Search
              </a>
              <div className="p-4 shadow-sm position-relative card-container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="mb-0">
                    Workforce Search <IoPerson />
                  </h6>
                </div>
                <div className="input-wrapper position-relative">
                  <IoSearch id="search-icon" />
                  <input
                    placeholder="Type Workforce Name / ID"
                    value={search}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                  <button
                    className="btn btn-sm btn-primary search-btn"
                    type="button"
                    onClick={() => {
                      navigate(`/products/${userID}`);
                    }}
                  >
                    Search
                  </button>
                </div>
                {showSuggetion && search.length > 0 && (
                  <div className="results-list">
                    {filterUser.length > 0 ? (
                      filterUser.map((item, index) => (
                        <div
                          className="search-result"
                          key={index}
                          onClick={() => {
                            setSearch(
                              `${item.NAME}${
                                item.EMPID ? ` [${item.EMPID}]` : ""
                              }`
                            );
                            setshowSuggetion(false);
                            setUserID(item?._id);
                          }}
                        >
                          {item.NAME}
                        </div>
                      ))
                    ) : (
                      <div className="search-result">No record</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Locator;
