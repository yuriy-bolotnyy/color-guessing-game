import React from "react";

const Button = (props) => {

    function handleClick() {
        console.log("click ...", props.colorcode)
        props.handleClick(props.colorcode)
    }

    return (
        <button className='btn default' onClick={handleClick}>
          {props.colorcode}
        </button>
    )
}

export default Button
