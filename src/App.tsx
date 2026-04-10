import { Link, NavLink } from 'react-router'
import './App.css'
import Counter from './components/counter'
import Input from './components/input'
import UsersList from './components/usersList'
import Example from './components/main-page'
import LoginPage from './components/login'
import { useContext } from 'react'
import { AppContext } from './context'

function App() { //component
  const {theme } = useContext(AppContext)

  const getAlert = () => {
    alert("Hello world")
  }

  return (
    <div className={`${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} h-screen flex flex-col items-center justify-center gap-4 `}>
      {/* <h1>Tasbeeh Counter</h1> */}

      {/* <Counter /> */}
      {/* <Input type='text' eyeIcon={true} placeholder='Enter your name' alt=''  />
      // <Input type='number' eyeIcon={false} placeholder='Enter your number' /> */}
       {/* <Input type='password' eyeIcon={true} userFunction={getAlert} placeholder='Enter your password' />
       <Input type='email' eyeIcon={false} placeholder='Enter your email' />  */}

      {/* <UsersList /> */}
      {/* <Example /> */}
      {/* <NavLink to="/counter">Go to Counter</NavLink> <br /> */}
      {/* <Link to='/counter' >Go to Counter</Link>  */}
      {/* <a href="/react-practice/counter">Go to Counter</a> */}

      <LoginPage />
    </div>
  )
}

export default App
