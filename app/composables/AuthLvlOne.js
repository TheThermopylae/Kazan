export default function () {
  let { userData } = userAuth()

  let authForm = useState('authForm', () => {
    return {
      name: '',
      family: '',
      national_code: '',
      date_of_birth: '',
      identity_card: '',
      passport: '',
      user_id: userData.value.id
    }
  })

  return { authForm }
}
