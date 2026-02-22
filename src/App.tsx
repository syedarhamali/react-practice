import './App.css'
import Counter from './components/counter'
import Input from './components/input'
import UsersList from './components/usersList'

function App() { //component

  const getAlert = () => {
    alert("Hello world")
  }

  return (
    <>
      {/* <h1>Tasbeeh Counter</h1> */}

      {/* <Counter /> */}
      {/* <Input type='text' eyeIcon={true} placeholder='Enter your name' alt=''  />
      <Input type='number' eyeIcon={false} placeholder='Enter your number' />
      <Input type='password' eyeIcon={true} userFunction={getAlert} placeholder='Enter your password' />
      <Input type='email' eyeIcon={false} placeholder='Enter your email' /> */}

      <UsersList />
    </>
  )
}

export default App
