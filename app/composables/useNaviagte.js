export default function () {
  let width = useState('width', () => 0)

  function updateWidth (link) {
    width.value = window.innerWidth
    if (width.value >= 1024) return navigateTo(link)
  }

  return { updateWidth }
}
