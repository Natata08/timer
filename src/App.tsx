import Input from './components/Input.tsx'
import Container from './components/Container.tsx'
import Button from './components/Button.tsx'

function App() {
  return (
    <main>
      <Input id='name' label='Name' type='text'></Input>
      <Input id='age' label='Age' type='number'></Input>
      <Container as={Button} type='button'>
        Click me
      </Container>
    </main>
  )
}

export default App
