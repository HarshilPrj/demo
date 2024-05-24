import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useToastify = () => {
    const showToast = (message, type = {}) => {
        toast(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            type: type,
        });
    };

    return { showToast };
};

export default useToastify;
