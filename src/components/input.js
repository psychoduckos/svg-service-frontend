import React from "react";


const Input = React.forwardRef(({...props}, ref) => {
      return ( 
            
      <input ref={ref} className="AuthInput" {...props}/>

      );
})
 
export default Input;