import React from 'react'

const SkillsView = () => {
  return (
    <>
       <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Core Skills</h5>
                                    <div className="eidtIcon"><i className="fa-regular fa-pen-to-square"></i></div>
                                </div>
                                <div className="card-body cutomeCard_body">

                                    <div className="row mb-2">
                                        <div className="col-sm-4 p-0">
                                            <span className="levelDiv"
                                                style={{backgroundColor:' #16a085'}}>COMMUNICATION</span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-4">
                                            <b>Notes</b><br/>
                                            <span> Comm</span>
                                        </div>
                                    </div>

                                    <div className="row mb-2">
                                        <div className="col-sm-4 p-0">
                                            <span className="levelDiv" style={{backgroundColor:'#d2ab50'}}>JAVA</span>
                                        </div>
                                    </div>


                                    <div className="row mb-2">
                                        <div className="col-sm-4">
                                            <b>Notes</b><br/>
                                            <span> Test</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    Level Of Proficiency:
                                    <span className="levelDiv" style={{backgroundColor: '#337ab7'}}>Level - 1</span>
                                    <span className="levelDiv" style={{backgroundColor: '#16a085'}}>Level - 2</span>
                                    <span className="levelDiv" style={{backgroundColor: '#d2ab50'}}>Level - 3</span>
                                    <span className="levelDiv" style={{backgroundColor: '#FF7518'}}>Level - 4</span>
                                    <span className="levelDiv" style={{backgroundColor: '#ff4444'}}>Level - 5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Membership</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="accordion accordion-flush" id="Membership">
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="flush-heading-Membership1">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-Membership1" aria-expanded="false"
                                                            aria-controls="flush-Membership1">
                                                            Membership #1
                                                        </button>
                                                    </h2>
                                                    <div id="flush-Membership1" className="accordion-collapse collapse show"
                                                        style={{backgroundColor:'#eeeeeeaf'}}
                                                        aria-labelledby="flush-heading-Membership1"
                                                        data-bs-parent="#Membership">
                                                        <div className="accordion-body">
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Name</em>
                                                                            <span>&nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>MembershipNo.</em>
                                                                            <span> &nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Category</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Sub Category</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership From</em>
                                                                            <span>&nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership Tenure</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>

                                                                            <em>Status</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>

                                                                            <em>Notes</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership Result</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="flush-heading-Membership2">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-Membership2" aria-expanded="false"
                                                            aria-controls="flush-Membership2">
                                                            Membership #2
                                                        </button>
                                                    </h2>
                                                    <div id="flush-Membership2" className="accordion-collapse collapse"
                                                        style={{backgroundColor:'#eeeeeeaf'}}
                                                        aria-labelledby="flush-heading-Membership2"
                                                        data-bs-parent="#Membership">
                                                        <div className="accordion-body">
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Name</em>
                                                                            <span>&nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>MembershipNo.</em>
                                                                            <span> &nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Category</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Sub Category</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership From</em>
                                                                            <span>&nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership Tenure</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>

                                                                            <em>Status</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>

                                                                            <em>Notes</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership Result</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="accordion-item">
                                                    <h2 className="accordion-header" id="flush-heading-Membership3">
                                                        <button className="accordion-button collapsed" type="button"
                                                            data-bs-toggle="collapse"
                                                            data-bs-target="#flush-Membership3" aria-expanded="false"
                                                            aria-controls="flush-Membership3">
                                                            Membership #3
                                                        </button>
                                                    </h2>
                                                    <div id="flush-Membership3" className="accordion-collapse collapse"
                                                         style={{backgroundColor:'#eeeeeeaf'}}
                                                        aria-labelledby="flush-heading-Membership3"
                                                        data-bs-parent="#Membership">
                                                        <div className="accordion-body">
                                                            <div className="row">
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Name</em>
                                                                            <span>&nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>MembershipNo.</em>
                                                                            <span> &nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Category</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Sub Category</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership From</em>
                                                                            <span>&nbsp;</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership Tenure</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>

                                                                            <em>Status</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>

                                                                            <em>Notes</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="col-sm-4">
                                                                    <ul>
                                                                        <li>
                                                                            <em>Membership Result</em>
                                                                            <span></span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Achievements</h5>
                                    <div className="eidtIcon"><i className="fa-regular fa-pen-to-square"></i></div>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <p>TO be Field</p>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Language Skills</h5>
                                    <div className="eidtIcon"><i className="fa-regular fa-pen-to-square"></i></div>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <p>TO be Field</p>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
  )
}

export default SkillsView