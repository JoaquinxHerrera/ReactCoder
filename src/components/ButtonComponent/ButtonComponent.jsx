import React from 'react'

function ButtonComponent(props) {
    const {children, colorFondo} = props;

    const styleButton = {
        backgroundColor: colorFondo,
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