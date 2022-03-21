import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './AccountModal.scss';
import Input from './input/Input';
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiLock,FiEyeOff } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { BsEye } from "react-icons/bs";
import { modalControl } from '../../redux/ItemsSlice';

function AccountModal() {
  const modalCheck = useSelector(state => state.items.modal);
  const dispatch = useDispatch()
  const [pasw,setPasw] = useState(false);

  function closeModal(){
    dispatch(modalControl(false))
  }
  
  return (
    <div className={`modal-bg ${modalCheck ? "m-height" : "" }`}>
      <div className={`modal ${modalCheck ? "m-block" : "" }`}>
        <div className="modal__header">
          <p className="modal__text">SIGN IN</p>
          <p className="modal__close" onClick={closeModal} ><IoMdClose /></p>
        </div>
        <form className="modal__form">
          <div className="modal__inps">
            <label className="modal__label">Email <span className="modal__spn">*</span></label>
            <Input type="email" />
            <span className="modal__icon"><AiOutlineUserAdd /></span>
          </div>
          <div className="modal__inps">
            <label className="modal__label">Password <span className="modal__spn">*</span></label>
            <Input type={`${pasw ? "text" : "password"}`} />
            <span className="modal__icons"><FiLock /></span>
            <span className="modal__show--pasw" onClick={()=> setPasw(!pasw)}>{pasw ? <FiEyeOff /> : <BsEye />}</span>
          </div>
          <button className="modal__btn">Login</button>
          <p className="modal__forgot">Forgot your password?</p>
        </form>
      </div>
    </div>
  )
}

export default AccountModal