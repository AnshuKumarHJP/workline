import React from 'react'

const OtherView = () => {
  return (
    <>
    
    <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Bank Info</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <div className="accordion accordion-flush" id="BankInfo">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-heading-BankInfo1">
                                                    <button className="accordion-button collapsed" type="button"
                                                        data-bs-toggle="collapse" data-bs-target="#flush-BankInfo1"
                                                        aria-expanded="false" aria-controls="flush-BankInfo1">
                                                        Bank Info # 1
                                                    </button>
                                                </h2>
                                                <div id="flush-BankInfo1" className="accordion-collapse collapse"
                                                    style={{backgroundColor:'#eeeeeeaf'}}
                                                    aria-labelledby="flush-heading-BankInfo1"
                                                    data-bs-parent="#BankInfo">
                                                    <div className="accordion-body">
                                                        <div className="row">
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>Effective Date</em>
                                                                        <span className="bank-info-value">17-Oct-2023</span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>Payment Transaction</em>
                                                                        <span className="bank-info-value"> Salary </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>Payment Mode</em>
                                                                        <span className="bank-info-value"> Bank Transfer
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>IFSC Code - D</em>
                                                                        <span className="bank-info-value"> ICIC0006625
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>Name of the Bank</em>
                                                                        <span className="bank-info-value">ICICI BANK LIMITED
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>Account Name</em>
                                                                        <span className="bank-info-value"> Bala </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>Account No</em>
                                                                        <span className="bank-info-value"> 123456789054321
                                                                            &nbsp;
                                                                            <span className="fa fa-eye"
                                                                                title="View">View</span>
                                                                        </span>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <div className="col-sm-4">
                                                                <ul>
                                                                    <li>
                                                                        <em>Cibil Score</em>
                                                                        <span className="bank-info-value"> &nbsp;Operator
                                                                            '&lt;&gt;' is not defined for type 'DBNull'
                                                                            and string "".
                                                                        </span>
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
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Reference Check</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <p>To be Filed</p>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Visa Details</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <p>To be Filed</p>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Other Bank Info</h5>
                                    <div className="eidtIcon"><i className="fa-regular fa-pen-to-square"></i></div>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <p>To be Filed</p>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Labour Card Info</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <ul>
                                                <li className="mb-2">
                                                    <em>Personal No</em>
                                                    <span>98787878789878 </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Labour Card Title</em>
                                                    <span>asdadadasdasdasdasdasdadsasd asdadsads </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Labour Card Expiry Date</em>
                                                    <span>12-Jul-2023 </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Fraudulent Activities / Criminal History</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <ul>
                                            <li className="mb-2">
                                                <em>Has there been any criminal / civil complaint filed against
                                                    you?</em>
                                                <span>No</span>
                                            </li>
                                            <li>
                                                <em>Have you ever been suspected for legal implications for any
                                                    activity?</em>
                                                <span>No</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Emirates ID</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <ul>
                                                <li className="mb-2">
                                                    <em>Emirates Id No</em>
                                                    <span>12123asdadsa12asdas</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Emirates Id Card No</em>
                                                    <span>Test2 </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>CPR Number</em>
                                                    <span></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Expiry Date
                                                    </em>
                                                    <span>12-Jul-2023 </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Statutory Forms</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <ul>
                                                <li className="mb-2">
                                                    <em>PF Applicable</em>
                                                    <span>Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Pension Applicable</em>
                                                    <span>Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Previous PF Account No</em>
                                                    <span>124566</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>UAN No</em>
                                                    <span>123456789090</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Previous Exit Date</em>
                                                    <span>03-Jul-2022</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Certificate No</em>
                                                    <span>12345</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Pension Payment Order No</em>
                                                    <span>12345</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>First EPF Member Enrolled Date </em>
                                                    <span>02/07/2023</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>First Employment EPF Wages </em>
                                                    <span>1324</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>Are you EPF Member before 01/09/2014 </em>
                                                    <span>Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>EPF Amount Withdrawn</em>
                                                    <span>120</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>After Sep 2014 earned EPS (Pension) Amount Withdrawn before Join
                                                        current Employer</em>
                                                    <span>Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-4">
                                            <ul>
                                                <li>
                                                    <em>ESIC Applicable</em>
                                                    <span>No</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Identification Details</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>Pan No</em>
                                                    <span>AAAPA2222Q &nbsp;</span>
                                                    <span> <i className="fa fa-eye mx-1"></i>View</span>

                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>Name As Per PanNo</em><span>&nbsp;
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>Aadhaar Card</em>
                                                    <span className="p-1"
                                                        style={{width:"fit-content",borderRadius:'5px',backgroundColor:'#5cb85c',color:'white',fontWeight:'bold'}}>
                                                        <i className="ace-icon fa fa-check mx-1 "></i>
                                                        Verified and Purged
                                                    </span>
                                                    <span> <i className="fa fa-eye mx-1"></i>View</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>Name As Per AadhaarCard</em>
                                                    <span></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>PF No</em>
                                                    <span>433443433434343434 &nbsp;</span>
                                                    <span> <i className="fa fa-download text-warning mx-1"></i>View</span>

                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>Name As Per PF No</em>
                                                    <span>aad </span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>ESI No </em>
                                                    <span>334343434343 </span>
                                                    <span> <i className="fa fa-download text-warning mx-1"></i>View</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>PRAN No</em>
                                                    <span></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>Created By</em>
                                                    <span></span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-sm-3">
                                            <ul>
                                                <li>
                                                    <em>Created Date</em>
                                                    <span>08-Aug-2023 10:45 </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Disciplinary Action - Case History</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <table id="PreviousHistory" className="table table-bordered table-hover table-condensed"
                                        style={{width:'100%'}}>
                                        <thead>
                                            <tr>
                                                <th className="text-center">Case ID</th>
                                                <th className="text-center">Initiated Date</th>
                                                <th className="text-center">Category</th>
                                                <th className="text-center">Sub Category</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Final Action</th>
                                            </tr>
                                        </thead>
                                        <tbody id="HistoryBody">
                                            <tr>
                                                <td valign="top" align="center" colSpan="6" style={{textAlign:'center'}}>
                                                    Record Does Not Exists</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Asset Info</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <table id="Table-AssetChecklist" cellSpacing="0" cellPadding="5" style={{width:'100%'}}
                                        border="0" className="table table-bordered table-hover table-condensed">
                                        <thead>
                                            <tr>
                                                <th align="center" width="5%">Sl.No</th>
                                                <th width="20%">Asset</th>
                                                <th>Provided Date</th>
                                                <th>Returnable</th>
                                                <th width="15%" className="print-none">Asset Mode</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td valign="top" align="center" colSpan="6" style={{textAlign:'center'}}>
                                                    Record Does Not Exists</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Personal Action</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <table id="Table-PersonalActions" cellSpacing="0" cellPadding="5"
                                        style={{width:'100%',border:0}}
                                        className="table table-bordered table-hover table-condensed">
                                        <thead>
                                            <tr>
                                                <th align="center" width="5%">Sl.No</th>
                                                <th width="20%">Type</th>
                                                <th>Subject</th>
                                                <th>Date of Entry</th>
                                                <th> Action Taken On</th>
                                                <th width="10%">Action Taken</th>
                                                <th width="15%" data-filter="N">Attachment</th>
                                                <th data-filter="N">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td valign="top" align="center" nowrap="nowrap">1</td>
                                                <td className="left" valign="top">Recognitions</td>
                                                <td className="left" valign="top">Subject 2</td>
                                                <td valign="top" className="center">28-Dec-2021</td>
                                                <td valign="top" className="center">28-Dec-2021</td>
                                                <td className="left" valign="top">1234</td>

                                                <td className="left" valign="top">

                                                    &nbsp;

                                                </td>
                                                <td className="left" valign="top">
                                                    <a className="btn btn-sm btn-outline-secondary"
                                                         title="View">
                                                        <i className="fa fa-search green"></i>&nbsp;&nbsp;View</a>
                                                    &nbsp;&nbsp;

                                                </td>
                                            </tr>

                                            <tr>
                                                <td valign="top" align="center" nowrap="nowrap">2</td>
                                                <td className="left" valign="top">Incentive</td>
                                                <td className="left" valign="top">sdfdsd</td>
                                                <td valign="top" className="center">25-Nov-2019</td>
                                                <td valign="top" className="center">&nbsp;&nbsp;</td>
                                                <td className="left" valign="top"></td>

                                                <td className="left" valign="top">

                                                    &nbsp;

                                                </td>
                                                <td className="left" valign="top">
                                                    <a className="btn btn-sm btn-outline-secondary"
                                                         title="View">
                                                        <i className="fa fa-search green"></i>&nbsp;&nbsp;View</a>
                                                    &nbsp;&nbsp;

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Labour Contract Info</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <table className="table table-bordered table-hover table-condensed"
                                        id="tableLabourCard152">
                                        <thead>
                                            <tr>
                                                <th>Labour Contract No</th>
                                                <th>Labour Contract Title</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td data-title="Labour Contract No">
                                                    CD12345
                                                </td>
                                                <td data-title="Labour Contract Title">
                                                    Test Title1
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Letter View</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <table className="table table-bordered table-hover table-condensed"
                                        id="tableLabourCard152">
                                        <thead>
                                            <tr>
                                                <th width="8%">Sl.No</th>
                                                <th>Letter</th>
                                                <th width="12%">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            <tr>
                                                <td data-title="Sl.No">1</td>
                                                <td style={{textAlign:'left'}} data-title="Letter">Promotion With CTC </td>
                                                <td nowrap="" data-title="Action">

                                                    <a style={{textDecoration:'none'}}
                                                        title="Download">
                                                        <i className="fa fa-download fa-lg"></i></a>

                                                </td>
                                            </tr>

                                            <tr>
                                                <td data-title="Sl.No">2</td>
                                                <td style={{textAlign:"left"}} data-title="Letter">Residence Address-Proof
                                                </td>
                                                <td nowrap="" data-title="Action">

                                                    <a style={{textDecoration:'nonr'}}
                                                        title="Download">
                                                        <i className="fa fa-download fa-lg"></i></a>

                                                </td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                        <div className="col-md-12 mb-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">System Rights</h5>
                                </div>
                                <div className="card-body cutomeCard_body">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <ul>
                                                <li><em>Roles</em>
                                                    <span>RMM,Skip Level Manager</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-6">
                                            <ul>
                                                <li><em>Enable Access</em>
                                                    <span>Yes</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer"></div>
                            </div>
                        </div>
                    </div>
                </div></>
  )
}

export default OtherView