import React from "react";

const Popup = ({ message }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-4 rounded-lg shadow-lg">
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Popup;
