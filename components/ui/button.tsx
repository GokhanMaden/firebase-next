import React from 'react';
import Link from 'next/link';

import classes from './button.module.css';

type IButton = {
  children: React.ReactNode;
  link?: string;
  onClick?: () => void;
};

const Button: React.FC<IButton> = ({ children, link, onClick }) => {
  if (link) {
    return (
      <Link href={link} className={classes.btn}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
