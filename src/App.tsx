import Button from './components/Button.tsx'
import Form, { type FormHandle } from './components/Form.tsx'
import Input from './components/Input.tsx'
import { useEffect, useRef } from 'react'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)
  const customFormRef = useRef<FormHandle>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string }
    console.log(extractedData)
    customFormRef.current?.clear()
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customFormRef}>
        <Input id='name' label='Name' type='text' ref={inputRef}></Input>
        <Input id='age' label='Age' type='number'></Input>
        <Button>Save</Button>
      </Form>
    </main>
  )
}

export default App
