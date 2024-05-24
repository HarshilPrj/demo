import React, { useContext, useReducer } from "react";
import { reducer, ThemeContext } from "../context";
import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

const Test = () => {
    const initialState = 0;

    const { mode, setMode } = useContext(ThemeContext);

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = () => {
        setMode(mode === "dark" ? "light" : "dark");
    };

    return (
        <div
            className={`h-auto border border-gray-300 shadow-lg rounded-lg p-6 ${
                mode === "dark" ? "bg-gray-800" : "bg-white"
            }`}
        >
            <h1 className="text-red-500 text-4xl font-semibold mb-4">Welcome</h1>
            {mode === "dark" ? (
                <MdDarkMode className="text-4xl" onClick={() => handleChange()} />
            ) : (
                <CiDark className="text-4xl" onClick={() => handleChange()} />
            )}

            <div className="p-6 m-4 bg-gray-50 rounded-lg shadow-inner">
                <p className="text-gray-700 text-2xl font-bold mb-4">{state}</p>
                <div className="flex gap-4">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        onClick={() => dispatch({ type: "Increment" })}
                    >
                        Increment
                    </button>
                    <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        onClick={() => dispatch({ type: "Decrement" })}
                    >
                        Decrement
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Test;
