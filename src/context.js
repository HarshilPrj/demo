import { createContext } from "react";

const ThemeContext = createContext(null);

const reducer = (state, action) => {
    if (action.type === "Increment") {
        return (state += 1);
    }

    if (action.type === "Decrement") {
        return (state -= 1);
    }
};

export { ThemeContext, reducer };
