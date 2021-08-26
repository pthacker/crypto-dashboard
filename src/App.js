import logo from './logo.svg';
import './App.css';
import Toast from './components/Common/Toast';
import Dashboard from './containers/dashboard';
import NavBar from './components/NavBar';
import HomePage from './containers/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      {/* <Toast message='show toast' severity={2}/> */}
      {/* <NavBar/>
    <Dashboard/> */}
    <HomePage/>
    </div>
  );
}

export default App;
