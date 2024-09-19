const Footer = () => {
  return (
    <footer className="flex font-roboto font-medium justify-center items-center py-4 w-full border-t border-solid border-gray-200">
      { 'Made by Esa 😘. View source at' }
      &nbsp;
      <a
        href="https://github.com/esasar/sort-visualizer"
        className="text-blue-400"
      >
      GitHub
      </a>
      { '.' }
    </footer>
  )
}

export default Footer