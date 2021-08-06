import logo from './logo.svg';
import './App.css';
import Toast from './components/Common/Toast';

function App() {
  return (
    <div className="App">
      <Toast message='show toast' severity={2}/>
    </div>
  );
}

export default App;
