import React from 'react';

function Button(props) {
  return <button type="button" onClick={props.sendData}>{props.buttonText}</button>
}

export default Button;