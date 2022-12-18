import React , {useState} from 'react'
// import useStyles from './styles';
import { TextField, Button, Typography, Paper } from '@mui/material';

export default function Form() {

  // const classes = useStyles();
  const [ postData ,setPostData] = useState({
    creator : '' , title : '' , message: '', tags : '',  selectedFile : ''
  });

  const handleSubmit = () => {

  }

  return (
    <Paper>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Typography variant="h6" >Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          onChange={(e) => setPostData({ ...postData ,creator : e.target.value})}
        />
      </Form>
    </Paper>
  )
}
