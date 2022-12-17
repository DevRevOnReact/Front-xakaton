import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header";
import LoginStaff from "./components/Staff/LoginStaff/LoginStaff";
import StaffAcc from "./components/Staff/StaffAcc";
import StaffCatalogs from "./components/Staff/StaffCatalogs";
import Admin from "./components/Admin/Admin";


function App() {
  return (
      <div className="App">

        {/*<Header />*/}
        {/*  <LoginStaff />*/}
        {/*   <StaffAcc/>*/}
        {/* <StaffCatalogs />*/}
<Admin />
      </div>
  );
}

export default App;
