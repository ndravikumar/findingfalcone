import RoutesComponent from "./Routes";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./components/Context";

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <RoutesComponent />
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
