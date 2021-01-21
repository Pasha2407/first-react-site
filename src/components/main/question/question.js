import React, { useState } from 'react';
import '../main.css'
import Block from './block/block';
import Modal from './modal/modal';

function Question() {
  const [showModal,setShowModal] = useState(false);
const openModal = () => {
  setShowModal(next => !next);
};

  return (
    <div className = "main">
         <Modal showModal={showModal} setShowModal={setShowModal}/>
      <div className = "content">
      <Block  name = "Пірати Карибського моря" count = "10" click = {openModal}
      img = {'https://ukranews.com/upload/news/2018/10/29/5bd711b43e928-11255217-10153237764368830-26452846137058792-n_410x272.jpg?v=1'}
     
      />
      <Block name = "Гарі Поттер" count = "5" click = {openModal}
      img = {'https://wallpapermemory.com/uploads/676/harry-potter-and-the-deathly-hallows-part-2-background-full-hd-1920x1080-32517.jpg'}

      />
      <Block name = "Месники" count = "15" click = {openModal}
      img = {'https://svopi.ru/uploads/posts/2018-04/1525077865_mesniki.jpg'}

      />
    </div>
    </div>
  );
}

export default Question;
