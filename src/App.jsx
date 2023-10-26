import Navbar from './components/Navbar';
import Header from './components/Header';
import Filepath from './components/Filepath';
import LeagueCard from './components/LeagueCard';
import './App.css';
import Standings from './components/Standings';
import Matches from './components/Matches';
import Matchstats from './components/Matchstats';
import Totw from './components/Totw';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Header/>
     <Filepath/>
     <LeagueCard/>
     <Standings/>
     <div className='sm:flex px-4 sm:px-28 mt-4 gap-5'>
        <Matches/>
        <Matchstats/>
        <Totw/>
     </div>
    </div>
  );
}

export default App;
