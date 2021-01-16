import React, { useState } from 'react';
import s from './block.module.css';
import Modal from './../test/modal';


function Block(props) {

const [showModal,setShowModal] = useState(false);
const openModal = () => {
  setShowModal(prev => !prev);
};
  return (
    <div className={s.block}>
      <div className={s.block_image}>
        <img src={props.img}></img>
      </div>
      <div className={s.block_name}>{props.name}</div>
      <div className={s.block_question}>
        Питання: {props.count}</div>
      <div className={s.block_button}>
          <button onClick = {openModal}>
            Play
            </button>
            <Modal showModal = {showModal} setShowModal = {setShowModal}/>
      </div>
    </div>
  );
}

export default Block;

