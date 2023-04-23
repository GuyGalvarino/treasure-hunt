import ReactDOM from 'react-dom/client';
import App from './App'
import { createTheme, ThemeProvider } from '@mui/material/styles'
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});
ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={darkTheme}>
        <App />
    </ThemeProvider>
)