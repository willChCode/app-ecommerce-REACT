import axios from 'axios'
// import Cookies from 'universal-cookie'
// const cookies = new Cookies()

const baseURL = 'http://localhost:3000/api/login'

const loginPost = async datos => {
  // const { data } = await axios.post(baseUrl, datos)
  const { data } = await axios({
    baseURL,
    withCredentials: true,
    method: 'POST',
    data: datos,
  })
  // document.cookie = `token=${data.token}`
  // cookies.set('token', data.token, { //! Esto ya no hace falta, el backend es el q crea la cookie y la envia al cliente, no el front end
  //   path: '/',
  //   secure: true,
  //   maxAge: 60 * 60 * 24 * 7
  // })
  return data
}

export { loginPost }

// const newCookie = JSON.stringify(res)
//   document.cookie = newCookie
