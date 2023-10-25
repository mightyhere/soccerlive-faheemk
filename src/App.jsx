import Navbar from './components/Navbar';
import Header from './components/Header';
import Filepath from './components/Filepath';
import LeagueCard from './components/LeagueCard';
import './App.css';
import Standings from './components/Standings';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Filepath/>
     <LeagueCard/>
     <Standings/>
    </div>
  );
}

export default App;
