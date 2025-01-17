//  First type of alert

// import React, { ReactNode } from 'react'
// import { ReactNode } from "react";

// interface Props {
//     children : ReactNode;
// }

// const Alert = ({children} : Props) =>{
//     return (
//         <div className='alert alert-primary' > {children} </div>
//     )
// }
 
// export default Alert




//  second type of alert 

import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;