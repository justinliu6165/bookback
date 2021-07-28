import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from "./components/layouts/NavBar";

import SearchDatePage from './pages/SearchDatePage'
import Booking from './pages/Booking'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar/>
        <Switch>
           <Route exact path="/" component={SearchDatePage} />
           <Route path="/booking" component={Booking} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
