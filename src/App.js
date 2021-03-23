
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import './App.css';
import Dashboard from './container/dashboard/dashboard';

import store from './store/store';


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <div>
          <Dashboard/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
