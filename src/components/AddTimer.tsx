import { useRef, useEffect } from 'react'

import Button from './UI/Button.tsx'
import Form, { type FormHandle } from './UI/Form.tsx'
import Input from './UI/Input.tsx'
import { useTimersContext } from '../store/timers-context.tsx'

export default function AddTimer() {
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<FormHandle>(null)

  const { addTimer } = useTimersContext()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; duration: string }
    addTimer({
      name: extractedData.name,
      duration: +extractedData.duration,
    })
    formRef.current?.clear()
  }

  return (
    <main>
      <Form ref={formRef} onSave={handleSave} id='add-timer'>
        <Input id='name' label='Name' type='text' ref={inputRef}></Input>
        <Input id='duration' label='Duration' type='number'></Input>
        <p>
          <Button>Add Timer</Button>
        </p>
      </Form>
    </main>
  )
}
