import React, { FC, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: UserType[]; // need to fix any
  addUserCallback: (name: string) => void; // need to fix any
};

export const pureAddUser = (
  name: string,
  setError: (name: string) => void,
  setName: (name: string) => void,
  addUserCallback: (name: string) => void,
) => {
  // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
  if (name.trim().length !== 0) {
    addUserCallback(name.trim());
    setName('');
  } else {
    setError('Ошибка! Введите имя!');
  }
};

export const pureOnBlur = (name: string, setError: (name: string) => void) => {
  if (name.trim().length === 0) {
    setError('Ошибка! Введите имя!');
  }
};

export const pureOnEnter = (key: string, addUser: () => void) => {
  if (key === 'Enter') {
    addUser();
  }
};

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: FC<GreetingContainerPropsType> = ({
  users,
  addUserCallback,
}) => {
  // деструктуризация пропсов
  const [name, setName] = useState<string>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (name: string) => {
    setName(name);

    error && setError('');
  };

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (key: string) => {
    pureOnEnter(key, addUser);
  };

  const totalUsers = users.length; // need to fix
  const lastUserName = [...users].pop()?.name; // need to fix

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
