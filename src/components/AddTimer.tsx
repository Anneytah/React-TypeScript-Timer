import React, { useRef } from 'react'
import Form, {type FormHandle} from './UI/Form'
import Input from './UI/Input'
import Button from './UI/Button'

const AddTimer = () => {
const customForm = useRef<FormHandle>(null)

  function handleSave(data: unknown){
     const extractedData = data as {name: string, age: string};
     console.log(extractedData);
     customForm.current?.clear()
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type='text' label='Name' id='name' />
        <Input type='number' label='Age' id='age' />
        <Button className='button'>AddTimer</Button>
      </Form>  
      </main>
  )
}

export default AddTimer