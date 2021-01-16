import React from 'react';
import s from './question.module.css';
import '../main.css'
import Block from './block/block';


function Question() {
  return (
    <div className = "main">
      <div className = "content">
      <Block name = "Пірати Карибського моря" count = "10"
      img = {'https://ukranews.com/upload/news/2018/10/29/5bd711b43e928-11255217-10153237764368830-26452846137058792-n_410x272.jpg?v=1'}
      />
      <Block name = "Гарі Поттер" count = "5"
      img = {'https://wallpapermemory.com/uploads/676/harry-potter-and-the-deathly-hallows-part-2-background-full-hd-1920x1080-32517.jpg'}
      />
      <Block name = "Месники" count = "15" 
      img = {'https://svopi.ru/uploads/posts/2018-04/1525077865_mesniki.jpg'}
      />
    </div>
    </div>
  );
}


export default Question;
