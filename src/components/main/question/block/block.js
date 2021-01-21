import React from 'react';
import s from './block.module.css';

function Block(props) {

  return (
    <div className={s.block}>
      <div className={s.block_image}>
        <img src={props.img}></img>
      </div>
      <div className={s.block_name}>{props.name}</div>
      <div className={s.block_question}>
        Питання: {props.count}</div>
      <div className={s.block_button}>
        <button onClick={props.click}>
          Play
            </button>
      </div>

    </div>
  );
}

export default Block;

