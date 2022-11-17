import axios from 'axios'
import Cookies from 'universal-cookie'
const cookies = new Cookies()

const baseUrl = 'http://localhost:3000/api/login'

const loginPost = async datos => {
  const { data } = await axios.post(baseUrl, datos)
  // document.cookie = `token=${data.token}`
  cookies.set('token', data.token, {
    path: '/',
    secure: true,
    maxAge: 60 * 60 * 24 * 7
  })
  console.log(cookies.get('token'))
  return data
}

export { loginPost }

// const newCookie = JSON.stringify(res)
//   document.cookie = newCookie
