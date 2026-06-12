import './App.css'
import ParseRota from './ParseRota/ParseRota'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'


const App = () => {
  return (
      <Container className="App" maxWidth="md">
        <Typography
          variant="h1"
          component="h1"
          sx={{ fontFamily: "'Fascinate', system-ui, sans-serif" }}
        >
          Childcare Planner
        </Typography>
        <Typography
          variant="h6"
           sx={{ fontFamily: "'Englebert', system-ui, sans-serif" }}
        >
          A personal planning tool for turning rota text into a monthly
          childcare plan.
        </Typography>
        <ParseRota />
    </Container>


  )
}

export default App
