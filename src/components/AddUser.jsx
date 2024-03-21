import React, { useState } from 'react'
import {FormGroup , FormControl, InputLabel, Input, Typography, Button} from '@mui/material'
import styled from '@emotion/styled';

import {addUser} from '../services/api';

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top : 20px;
  }
`;

const defValue = {
  name : '',
  email:'',
  username: '',
  phone: ''
};


const AddUser = () => {

  const [user , setUser] = useState(defValue);

  const onValueChange = (e)=>{
    setUser({...user , [e.target.name] : e.target.value });
  }
  const addUserDetails = async ()=>{
    await addUser(user);
  }
  return (
    <Container>
      <Typography variant='h4'>Add User</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='name'/>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='username'/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='email'/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e)=> onValueChange(e)} name='phone'/>
      </FormControl>
      <FormControl>
        <Button variant='contained' onClick={()=> addUserDetails()}>Add User </Button>
      </FormControl>
    </Container>
  )
}

export default AddUser;
