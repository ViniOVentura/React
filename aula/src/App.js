import routes from "./pages/routes";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
    return (
        <Routes>
            {routes.map((data, index) => (
                <Route
                    exact={true}
                    path={data.path}
                    element={data.component}
                    key={index}
                />
            ))}
        </Routes>
    );
}

export default App;