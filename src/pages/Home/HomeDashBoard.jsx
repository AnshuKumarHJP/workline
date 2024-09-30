import React from 'react'
import { useSelector } from 'react-redux';
import Menu from '../../component/common/DashBoard/Menu/Menu';
import { Link } from 'react-router-dom';
import './HomeDashBoard.css'

const HomeDashBoard = () => {
  const { auth } = useSelector((store) => store);
  const { user, isLoding, error } = auth;

  return (
   <>
    <Menu />
    <div className="d-flex justify-content-center align-items-center my-5">
        <h3 className="text-start">
          <b>
            Hello <i>{user?.NAME} !</i>
          </b>
          <br />
          <span>
            Thank you for sharing your mood with us <span>&#128516;</span>
            <br />
          </span>
          <br />
          We see that you are in a happy mood... Time to fly
        </h3>


        <Link to='/emp/profileView'>DBsddsdsdd</Link>
      </div>
   </>
  )
}

export default HomeDashBoard