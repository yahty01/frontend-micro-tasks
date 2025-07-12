import React, { ReactNode, useEffect, useState } from 'react';
import { Header } from '../header/Header';
import { Sidebar } from '../sidebar/Sidebar';

type PropsType = {
  children: ReactNode;
};

export const Layout = ({ children }: PropsType) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    open && (document.documentElement.style.overflow = 'hidden');
    !open && (document.documentElement.style.overflow = 'unset');
  }, [open]); // отключает прокрутку при открытом меню

  return (
    <>
      <Sidebar open={open} handleClose={handleClose} />
      <Header handleOpen={handleOpen} />
      <div>{children}</div>
    </>
  );
};
