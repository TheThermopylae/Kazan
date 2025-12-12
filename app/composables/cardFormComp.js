export default function () {
  let cardForm = useState('cardForm', () => {
    return {
      card_number: '',
      bank_logo_image: '',
      identity_image: '',
      national_code: '',
      bank_name: '',
      card_name: '',
      sheba_account_n: '760570077700012402748001',
      phone: '',
      card_type: 'ir',
      card_identity_type: ''
    }
  })

  return { cardForm }
}
