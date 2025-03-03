import React, { JSX, useReducer } from 'react'
import { TextField, Button, Container, Typography, Box } from '@mui/material'

// Define types for form state and actions
type FormState = {
  name: string
  email: string
  message: string
}

type Action = { type: 'UPDATE_FIELD'; field: keyof FormState; value: string } | { type: 'RESET' }

// Reducer function with typed state and actions
const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        [action.field]: action.value,
      }
    case 'RESET':
      return {
        name: '',
        email: '',
        message: '',
      }
    default:
      return state
  }
}

export default function ContactForm(): JSX.Element {
  const [formState, dispatch] = useReducer(formReducer, {
    name: '',
    email: '',
    message: '',
  })

  // Event handler with typed event
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch({
      type: 'UPDATE_FIELD',
      field: e.target.name as keyof FormState,
      value: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form Submitted:', formState)
    dispatch({ type: 'RESET' })
  }

  return (
    <Container maxWidth='sm'>
      <Box
        component='form'
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          p: 3,
          backgroundColor: '#fff',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant='h4' align='center' gutterBottom>
          Contact Us
        </Typography>
        <TextField
          label='Name'
          name='name'
          value={formState.name}
          onChange={handleChange}
          variant='outlined'
          fullWidth
        />
        <TextField
          label='Email'
          name='email'
          value={formState.email}
          onChange={handleChange}
          variant='outlined'
          fullWidth
          type='email'
        />
        <TextField
          label='Message'
          name='message'
          value={formState.message}
          onChange={handleChange}
          variant='outlined'
          fullWidth
          multiline
          rows={4}
        />
        <Button type='submit' variant='contained' color='primary' fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  )
}
