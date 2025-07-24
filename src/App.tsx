import Input from './components/Input.tsx'
import { useEffect, useRef } from 'react'

function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <main>
      <Input id='name' label='Name' type='text' ref={inputRef}></Input>
      <Input id='age' label='Age' type='number'></Input>
    </main>
  )
}

export default App
