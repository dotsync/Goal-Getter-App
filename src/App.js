import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Users from './User/pages/Users.jsx';

function App() {
  const styles = {
    color: 'blue'
  }
  return (
    <div className="App">
      <h1 className="hello" style={styles}>hello</h1>
      <Router>
        <Users />
      </Router>
    </div>
  );
}

export default App;
