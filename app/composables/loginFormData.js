export default function () {
  let form = useState('form', () => {
    return {
      phone: '',
      invite_code: '',
      password: ''
    }
  })

  return { form }
}
