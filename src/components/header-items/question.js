import React from 'react';
import './../main.css';
import s from './question.module.css';

function Question() {
  return (
    <div className = "main">
      <div className = "content">
          <div className = {s.block}>
            <div className = {s.block_image}></div>
            <div className = {s.block_name}>Пірати Карибського моря</div>
            <div className = {s.block_question}>Питання: 10</div>
            <div className = {s.blocks_button}>
            <div className = {s.block_like}>Like</div>
            <div className = {s.block_play}>Play</div>
            </div>
          </div>
          <div  className = {s.block}></div>
          <div  className = {s.block}></div>
      </div>
    </div>
  );
}


export default Question;
