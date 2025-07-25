import { forwardRef, type ComponentPropsWithoutRef } from 'react'

type InputProps = {
  label: string
  id: string
  error?: string
} & ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, error, ...props },
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
      {error && <span className='error-text'>{error}</span>}
    </p>
  )
})

export default Input
