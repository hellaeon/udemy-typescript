import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';

export const TaskTitleField: FC<ITextField> = (props): ReactElement => {
  // from ITextField interface
  const {
    onChange = (e) => {
      console.log(e.target.value);
    },
    disabled = false,
  } = props;

  return (
    <TextField
      id="title"
      name="title"
      label="Task Title"
      placeholder="Task Title"
      variant="outlined"
      size="small"
      fullWidth
      disabled={disabled}
      onChange={onChange}
    />
  );
};
