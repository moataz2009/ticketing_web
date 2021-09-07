import AddTickets from './components/AddTickets';
import Headers from './components/Header';
import TicketsLists from './components/TicketsLists';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
//axios.defaults.headers.common['Authorization'] =' AUTH_TOKEN';

function App() {
  return (
    <Router>

    


      {/* <Headers />
    
      <div className="ui container">
        <AddTickets />
        <TicketsLists />
      </div> */}

    </Router>
    
  );
}

export default App;
