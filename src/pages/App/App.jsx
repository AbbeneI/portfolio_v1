import './App.css';
import Hero from '../../components/sections/hero/hero';
import Navbar from '../../components/navbar/navbar';
import NavbarLeft from '../../components/navbar-left/navbar-left';


function App() {
  return (
    <>
      <header className="App-header">
        <Navbar />
        <NavbarLeft />
      </header>

      <main className="App">
        <Hero />
        {/* <About />
        <Jobs />
        <Featured />
        <Projects />
        <Contact /> */}
      </main>
    </>
  );
}

export default App;
