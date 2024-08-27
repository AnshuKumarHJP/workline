import React from "react";

const MyTeam = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 p-0">
          <div className="card pb-4">
            <div className="card-header py-3">
              <h6 className="mb-0 fw-bold">My Team</h6>
            </div>
            <div className="card-body cutomeCard_body">
              {[1, 1, 1, 1, 1, 1].map((item,i)=>(
                  <div key={i} className=" d-flex justify-content-between align-items-center my-2 p-2 border">
                  <div className="d-flex align-items-center">
                    <div>
                      <img
                        src="./assets/avatar11.jpg"
                        className="rounded-circle avatar-md"
                        alt="Image"
                      />
                    </div>
                    <div className="ms-3">
                      <h6 className="mb-1">Dianna Smiley</h6>
                      <p className="text-muted mb-0 d-none d-md-block">
                        UI / UX Designer
                      </p>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#"
                      className="btn-lg me-4 text-dark fs-5"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="fa-solid fa-ellipsis-vertical"></i>
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTeam;
