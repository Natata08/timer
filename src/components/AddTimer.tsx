import { useRef, useState, useEffect } from 'react'

import Button from './UI/Button.tsx'
import Form, { type FormHandle } from './UI/Form.tsx'
import Input from './UI/Input.tsx'
import { useTimersContext } from '../store/timers-context.tsx'

export default function AddTimer() {
  const inputRef = useRef<HTMLInputElement>(null)
  const formRef = useRef<FormHandle>(null)
  const [errors, setErrors] = useState<{ name?: string; duration?: string }>({})

  const { addTimer } = useTimersContext()

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; duration: string }
    const newErrors: { name?: string; duration?: string } = {}

    if (extractedData.name.trim().length === 0) {
      newErrors.name = 'Name is required.'
    }

    if (+extractedData.duration <= 0) {
      newErrors.duration = 'Duration must be greater than 0.'
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    addTimer({
      name: extractedData.name,
      duration: +extractedData.duration,
    })

    formRef.current?.clear()
    setErrors({})
  }

  return (
    <main>
      <Form ref={formRef} onSave={handleSave} id='add-timer'>
        <Input id='name' label='Name' type='text' ref={inputRef} error={errors.name}></Input>
        <Input id='duration' label='Duration' type='number' error={errors.duration}></Input>
        <p>
          <Button>Add Timer</Button>
        </p>
      </Form>
    </main>
  )
}
