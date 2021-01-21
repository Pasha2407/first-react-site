import React from 'react';
import s from './modal.module.css';

function Modal({showModal, setShowModal },props) {

    return (
        <div>
            {showModal ?
                <div className={s.main}>
                    <div className={s.modal}>
                        <div  className = {s.exit}>
                        <button  onClick = {() => setShowModal(next => !next)}>
                            exit
                        </button>
                        </div>
                        <div className = {s.header}>
                            Test
                            </div>
                            <div className = {s.text}>
                               1 question
                               </div>
                               <div className = {s.text}>
                               2 question
                               </div>
                               <div className = {s.text}>
                               3 question
                               </div>
                               <div className = {s.text}>
                               4 question
                               </div>
                               <div className = {s.result}>
                              <button>RESULT</button> 
                               </div>
                    </div>
                </div>
                : null}
        </div>
    );
}

export default Modal;