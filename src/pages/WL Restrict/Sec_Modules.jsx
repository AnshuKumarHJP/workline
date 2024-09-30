import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import WL_Comp from "../../component/common/WL_Comp/WL_Comp";
import InputWithLabel from "../../component/common/InputWithLabel";
import { useDispatch, useSelector } from "react-redux";
import Input_RadioWithLabel from "../../component/common/Input_RadioWithLabel";
import DropdownWithLabel from "../../component/common/DropdownWithLabel";
import { getAllModule } from "../../Redux/features/WL Common/WL_Action";
import ListDataTable from "../../component/common/Table/ListDataTable";

const columnData = [
  { title: "Module Code", rowData: "Module_Code" },
  { title: "Module Name", rowData: "Module_Name" },
  { title: "Link URL", rowData: "LinkURL" },
  { title: "Link Info", rowData: "Link_Info" },
  { title: "Display", rowData: "Display" },
  { title: "Module ICON", rowData: "ICON" },
  { title: "Display Order", rowData: "Display_Order" },
];

const Sec_Modules = () => {
  const location = useLocation(); // Access the location object
  const query = new URLSearchParams(location.search); // Create a URLSearchParams object
  const mode = query.get("mode");
  const { auth, WLComm } = useSelector((store) => store);
  const { user } = auth;
  const { AllModule } = WLComm;
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    Module_Code: "",
    Module_Name: "",
    Typeofuser: "",
    Display: true,
    Active: true,
    Display_Order: "",
    ICON: "",
    LinkURL: "",
    CreatedBy: "",
  });

  useEffect(() => {
    if (user?.USERCODE) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        CreatedBy: user.USERCODE,
      }));
    }
  }, [user?.USERCODE]);

  useEffect(() => {
    dispatch(getAllModule());
  }, [dispatch]);

  useEffect(() => {
    console.log(AllModule);
  }, [AllModule]);

  const handleSubmit = async () => {
    console.log(formData);
  };

  return (
    <>
      {mode === "add" && (
        <div className="p-3">
          <WL_Comp.WL_Div Bordercolor="#052c65">
            <form action="">
              <div className="row">
                <div className="col-md-6">
                  <InputWithLabel
                    label="Module Code"
                    type="text"
                    mand={true}
                    placeholder="Module Code"
                    setvalue={formData.Module_Code}
                    getvalue={(value) =>
                      setFormData((prev) => ({ ...prev, Module_Code: value }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <InputWithLabel
                    label="Module Name"
                    type="text"
                    mand={true}
                    placeholder="Module Name"
                    setvalue={formData.Module_Name}
                    getvalue={(value) =>
                      setFormData((prev) => ({ ...prev, Module_Name: value }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <InputWithLabel
                    label="Module Icon"
                    type="text"
                    placeholder="Module Icon"
                    setvalue={formData.ICON}
                    getvalue={(value) =>
                      setFormData((prev) => ({ ...prev, ICON: value }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <InputWithLabel
                    label="Module LinkURL or Path"
                    type="text"
                    placeholder="Module LinkURL"
                    setvalue={formData.LinkURL}
                    getvalue={(value) =>
                      setFormData((prev) => ({ ...prev, LinkURL: value }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <DropdownWithLabel
                    label="Type oF User"
                    placeholders="-- select user type --"
                    mand={true}
                    //dataList={ArrayDummyData?.CasteData}
                    valueName="CasteCode"
                    valueLabel="CasteName"
                    Set_selectedData={formData.Typeofuser}
                    Get_selectedData={(value) =>
                      setFormData((prev) => ({ ...prev, Typeofuser: value }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <InputWithLabel
                    label="Display Order"
                    type="text"
                    placeholder="Display Order"
                    setvalue={formData.Display_Order}
                    getvalue={(value) =>
                      setFormData((prev) => ({ ...prev, Display_Order: value }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <Input_RadioWithLabel
                    label="Display"
                    mand={true}
                    name="display"
                    setvalue={formData.Display}
                    getvalue={(value) =>
                      setFormData((prev) => ({ ...prev, Display: value }))
                    }
                  />
                </div>
                <div className="col-md-6">
                  <Input_RadioWithLabel
                    label="Active"
                    name="active"
                    mand={true}
                    setvalue={formData.Active}
                    getvalue={(value) =>
                      setFormData((prev) => ({ ...prev, Active: value }))
                    }
                  />
                </div>
              </div>
            </form>
          </WL_Comp.WL_Div>

          <WL_Comp.WL_Div alignRight={true}>
            {mode == "add" ? (
              <WL_Comp.SaveButtom functionName={handleSubmit}>
                Save
              </WL_Comp.SaveButtom>
            ) : (
              <>
                <WL_Comp.SaveButtom>Update</WL_Comp.SaveButtom>
                <WL_Comp.CancelButtom>Cancel</WL_Comp.CancelButtom>
              </>
            )}
          </WL_Comp.WL_Div>
        </div>
      )}

      {mode === "list" && (
        <>
          {AllModule && (
            <div className="m-3">
              <ListDataTable
                data={AllModule}
                columnData={columnData}
                Navigate="false"
                getClickedData={setFormData}
              />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Sec_Modules;
