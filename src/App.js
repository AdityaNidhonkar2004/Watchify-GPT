
import './App.css';
import Body from './components/bodyComponent/Body';
import { Provider } from 'react-redux';
import appStore from './utils/store/userStore';


function App() {
  return (
    <div className="App bg-black">
      <Provider store={appStore}>

        <Body />
      </Provider>
    </div>
  );
}

export default App;
