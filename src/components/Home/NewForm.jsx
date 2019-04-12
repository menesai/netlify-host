import React, { Component } from 'react'
import './NewForm.css'

export class NewForm extends Component {
  render() {
    return (
        <form method="POST" data-netlify="true">
            <input
            placeholder='name'
            name='name'
            type='text'
            />
            <input
            placeholder='email'
            name='email'
            type='email'
            />
            <textarea
            placeholder='message'
            name='message'
            type='text'
            />
            <input
            type='submit'
            value='Submit'
            />
        </form>
    )
  }
}

export default NewForm
