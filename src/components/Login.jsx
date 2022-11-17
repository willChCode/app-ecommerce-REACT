import { useState, useEffect } from 'react'
import { loginPost } from '../services/Login.js'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleSubmit = e => {
    e.preventDefault()
    const datos = {
      email,
      password
    }
    loginPost(datos).then(response => console.log(response))
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='email' onChange={handleEmail} />
        <input
          type='password'
          placeholder='password'
          onChange={handlePassword}
        />
        <button>login</button>
      </form>
    </>
  )
}
export { Login }
