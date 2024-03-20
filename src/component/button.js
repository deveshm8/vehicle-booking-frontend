import React from 'react';
import Button from '@mui/material/Button';

function UserButton(props) {
  return (
    <div>
      <Button variant={props.variant} color={props.color} onClick={props.onClick}>
        {props.name}
      </Button>
    </div>
  );
}

export default UserButton;