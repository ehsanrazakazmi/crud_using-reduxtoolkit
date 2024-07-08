import React from 'react'
import "./CustomModal.css";
import { useSelector } from "react-redux";


const CustomModal = ({id, showPopUp, setshowPopUp}) => {

    const allusers = useSelector((state) => state.app.users);

    const singleUser = allusers.filter((ele) => ele.id === id)
  return (
    <div className='modalbackground'>
        <div className="modalcontainer">
           <button onClick={()=>setshowPopUp(false)}>Close</button>
           <h2>{singleUser[0].name}</h2>
           <h2>{singleUser[0].email}</h2>
           <h2>{singleUser[0].age}</h2>
           <h2>{singleUser[0].gender}</h2>
        </div>
    </div>
  )
}

export default CustomModal