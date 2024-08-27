import React from "react";

const MyConnects = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 p-0">
          <div className="card pb-4">
            <div className="card-header py-3">
              <h6 className="mb-0 fw-bold ">My Connects</h6>
            </div>
            <div className="card-body cutomeCard_body">
              <div className="row">
                {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                  <div key={i} className="col-xl-6 mb-4">
                    <div className="py-2 d-flex align-items-center border rounded">
                      <div className="d-flex ms-2 align-items-center flex-fill">
                        <img
                          src="../img/1.jpg"
                          width="50px"
                          className="rounded-circle"
                          alt="avatar"
                        />
                        <div className="d-flex flex-column ps-2">
                          <h6 className="mb-0">Komaravel Kuppusamy [50009]</h6>
                          <span className="small text-muted">
                            Reporting Manager
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyConnects;
