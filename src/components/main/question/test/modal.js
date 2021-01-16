import React from 'react';
import s from './modal.module.css';

function Modal({ showModal, setShowModal }) {

    return (
        <div>
            {showModal ?
                <div className={s.main}>
                    <div className={s.modal}>
                       
                            Modal
                    </div>
                </div>
                : null}
        </div>
    );
}

export default Modal;