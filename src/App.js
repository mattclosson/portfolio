import './App.css';
import Description from './components/Description';
import Header from './components/Header';
import Projects from './components/Projects';
import Nav from './components/Nav'
import Contact from './components/Contact'

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Description />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
