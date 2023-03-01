import React, { FC, ReactElement } from 'react';
import { Avatar, Box, Typography } from '@mui/material';
import { ITaskCounter } from './interfaces/ITaskCounter';
import { Status } from '../createTaskForm/enums/status';
import { emitCorrectBorderColour } from './helpers/emitCorrectBorder';
import { emitCorrectLabel } from './helpers/emitCorrectLabel';
export const TaskCounter: FC<ITaskCounter> = (props): ReactElement => {
  const { status = Status.completed, count = 0 } = props;
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar
          sx={{
            backgroundColor: 'transparent',
            border: '5px solid',
            width: '96px',
            height: '96px',
            marginBottom: '16px',
            borderColor: `${emitCorrectBorderColour(status)}`,
          }}
        >
          <Typography color="#fff" variant="h4">
            {count}
          </Typography>
        </Avatar>
        <Typography color="#fff" variant="h5" fontWeight="bold" fontSize="20px">
          {emitCorrectLabel(status)}
        </Typography>
      </Box>
    </>
  );
};
