import "./index.css";
import "./styles/custom.css";

import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes";
import ReduxProvider from "./services/provider/ReduxProvider";

const App = () => {
  return (
    <div>
      <ReduxProvider>
        <RouterProvider router={Routes} />
      </ReduxProvider>
    </div>
  );
};

export default App;
