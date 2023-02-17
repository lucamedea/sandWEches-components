import * as React from 'react';
import Fab from '@mui/material/Fab';
import BackIcon from '@mui/icons-material/ArrowBackIosNew';
import './arrowButton.css'

export default function FloatingActionButton() {
  return (
      <Fab 
      size="small"
      aria-label="add">
     <BackIcon/>
      </Fab>
  );
}