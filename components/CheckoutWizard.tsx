import { makeStyles, Step, StepLabel, Stepper } from '@material-ui/core';
import React from 'react';
import useStyles from '../utils/styles';

export default function CheckoutWizard({ activeStep = 0 }) {
  const myStyle = makeStyles(() => ({
    root: {
      '& .MuiStepIcon-active': { color: '#208080' },
      '& .MuiStepIcon-completed': { color: '#208080' },
      '& .Mui-disabled .MuiStepIcon-root': { color: 'grey' },
    },
  }));
  const style = myStyle();
  // const classes = useStyles();
  return (
    <Stepper className={style.root} activeStep={activeStep} alternativeLabel>
      {['Login', 'Shipping Address', 'Payment Method', 'Place Order'].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
