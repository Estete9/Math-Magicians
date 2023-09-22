import './App.scss';
import Calculator from './components/Calculator';
import Quote from './components/Quote';

function App() {
  return (
    <div className="app">
      <main className="app-main">
        <Calculator />
        <Quote />
      </main>
    </div>
  );
}

export default App;
