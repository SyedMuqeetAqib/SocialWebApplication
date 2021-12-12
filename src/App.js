import { Switch, Route, Redirect } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Navbar from "./components/Navbar/index";
import Login from "./components/auth/Login"
import Signup from "./components/auth/Signup";

import  {useContext} from "react"
import { AuthContext } from "./context/AuthContext";

function App() {

  const {user}= useContext(AuthContext);
  console.log(user)

  return (
      <Switch>
        <Route path="/signup" exact>
          {user?<Redirect to="/" />:<Signup/>}
        </Route>
        <Route path="/login" exact>
          {user?<Redirect to="/" />:<Login/>}
        </Route>
        <Route path="/">
          {user?
        <div>
          <Navbar />
          <MainPage />
        </div>
        :<Login/>}
        </Route>
      </Switch>
  );
}

export default App;
