import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



export default function CartComponent(props) {
    let badgeContent = props.badgeContent;
  return (
    <IconButton aria-label="cart">
            <Badge badgeContent={badgeContent} color="secondary">

        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
}