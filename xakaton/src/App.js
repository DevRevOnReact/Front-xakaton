import logo from './logo.svg';
import './App.css';
import BasicExample from "./components/Ex";
import AlertDismissibleExample from "./components/Ex";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./components/ui/Navigation";

function App() {
  return (
    <div className="App">
      {/*<AlertDismissibleExample />*/}
        <Navigation />
    </div>
  );
}

export default App;
