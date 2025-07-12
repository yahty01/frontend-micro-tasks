import React from 'react';
import Message from './message/Message';
import MessageSender from './message-sender/MessageSender';
import s2 from '../../s1-main/App.module.css';
import FriendMessage from './friend-message/FriendMessage';
import avatar from './avatar.png';
import avatar2 from './avatar2.png';

type UserType = {
  avatar: string;
  name: string;
};

export type TextMessageType = {
  text: string;
  time: string;
};

export type MessageType = {
  id: number;
  user: UserType;
  message: TextMessageType;
};

export const message0: MessageType = {
  id: 0,
  user: {
    avatar: avatar,
    name: 'Me',
  },
  message: {
    text: 'Привет! Как твои дела? Я сегодня весь день занималась проектом и наконец-то всё получилось! 😊',
    time: '21:47',
  },
};

export const friendMessage0: MessageType = {
  id: 100,
  user: {
    avatar: avatar2,
    name: 'Dima',
  },
  message: {
    text: 'О, класс! Расскажешь подробнее? Интересно, как ты всё реализовала. Я сейчас как раз сижу над похожей задачей.',
    time: '21:49',
  },
};

const HW1 = () => {
  return (
    <div id={'hw1'} className={s2.contain}>
      <div className={s2.hwTitle}>Homework #1</div>
      <div className={s2.hw}>
        {/*проверка отображения (не менять)*/}
        <div className={s2.contmessage}>
          <Message message={message0} />
          <FriendMessage message={friendMessage0} />
        </div>

        <MessageSender M={Message} />
      </div>
    </div>
  );
};

export default HW1;
