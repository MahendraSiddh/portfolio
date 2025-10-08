import Portfolio from './components/Portfolio'
import { ThemeProvider } from './context/ThemeContext'; // Import the new provider


function App() {
  return(
    // Wrap the Portfolio component with the ThemeProvider
    <ThemeProvider>
      <Portfolio/>
    </ThemeProvider>
  )
}

export default App