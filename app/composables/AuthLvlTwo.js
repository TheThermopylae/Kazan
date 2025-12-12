export default function () {
  let authForm = useState('authForm', () => {
    return {
      name: '',
      family: '',
      national_code: '',
      video: ''
    }
  })

  return { authForm }
}
