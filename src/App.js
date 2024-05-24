import { useState } from "react";
import { ThemeContext } from "./context";
import Router from "./routes/Router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
    const [mode, setMode] = useState("dark");
    return (
        <div className="App">
            <ThemeContext.Provider value={{ mode, setMode }}>
                <Router />
            </ThemeContext.Provider>
            <ToastContainer />
        </div>
    );
}

export default App;
