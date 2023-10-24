import Navbar from './components/Navbar';
import Header from './components/Header';
import Filepath from './components/Filepath';
import LeagueCard from './components/LeagueCard';
import './App.css';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Filepath/>
     <LeagueCard/>
    </div>
  );
}

export default App;
