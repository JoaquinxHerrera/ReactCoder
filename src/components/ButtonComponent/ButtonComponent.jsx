import React from 'react';
import "../ButtonComponent/ButtonStyle.css";

function ButtonComponent(props) {
    const {children, colorFondo, textcolor} = props;

    const styleButton = {
        backgroundColor: colorFondo,
        color: textcolor,
    };

  return (
    <div>
        <button style={styleButton} className="btn">
            {children}
        </button>
    </div>
  )
}

export default ButtonComponent