import logo from './logo.svg';
import './App.css';
import Toast from './components/Common/Toast';
import Dashboard from './containers/dashboard';

function App() {
  return (
    <div className="App">
      {/* <Toast message='show toast' severity={2}/> */}
    <Dashboard/>
    </div>
  );
}

export default App;
