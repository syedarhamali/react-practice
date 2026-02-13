import './App.css'
import Input from './components/input'

function App() { //component

  const getAlert = () => {
    alert("Hello world")
  }

  return (
    <>
      <h1>Hello world</h1>
      <Input type='text' eyeIcon={false} />
      <Input type='number' eyeIcon={false} />
      <Input type='password' eyeIcon={true} userFunction={getAlert} />
      <Input type='email' eyeIcon={false} />
    </>
  )
}

export default App
