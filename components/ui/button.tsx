import React from 'react';
import Link from 'next/link';

import classes from './button.module.css';

type IButton = {
  children: React.ReactNode;
  link: string;
};

const Button: React.FC<IButton> = ({ children, link }) => {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
