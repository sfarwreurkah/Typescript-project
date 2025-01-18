// import React from 'react'


// interface Props{
//     children: string;
//     onClick: () => void;
// }
// const Button = ({children, onClick} : Props) => {
//   return (
//     <button type="button" className="btn btn-primary" onClick={onClick}> {children}Primary</button>
//   )
// }
// export default Button




//  from video 32

import styles from "./Button.module.css"

interface Props{
    children: string;
    color?: 'primary'| 'secondary' | 'danger';
    onClick: ()=> void;
}

const Button = ({children, onClick, color="primary"}: Props) => {
  return (
      <button className={[styles.btn, styles['btn-'+ color]].join('')} onClick={onClick}>
        {children}</button>

  )
}

export default Button