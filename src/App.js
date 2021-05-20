import { Switch, Route } from 'react-router-dom';
import WeatherDisplay from './components/WeatherDisplay';
import './App.scss';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switch>
          <Route exact path="/" component={WeatherDisplay} />
          <Route path="/:day" component={WeatherDisplay} />
        </Switch>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;
