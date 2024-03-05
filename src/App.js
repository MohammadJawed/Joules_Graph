import logo from './logo.svg';
import './App.css';
import Graph from './component/graph';
import { Grid } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Grid container justifyContent="center">
        <Grid item xs={8}>
          <Graph />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
