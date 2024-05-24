import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { toast } from "react-toastify";

function AddUser({ type }) {
    const [data, setData] = useState(null);
    const { id } = useParams();

    const navigate = useNavigate();

    const initialValues1 = {
        firstName: "",
        lastName: "",
        email: "",
    };

    const initialValues2 = {
        firstName: data?.firstName,
        lastName: data?.lastName,
        email: data?.email,
    };

    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email")
            .required("Email is required")
            .trim()
            .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                "Invalid email format"
            ),
        firstName: Yup.string().min(3).max(20).required("First Name is required").trim(),
        lastName: Yup.string().min(3).max(20).required("Last Name is required").trim(),
    });

    const handleCreateUser = async (values) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.post(
                `${process.env.REACT_APP_API_URL}users/admin/create`,
                {
                    ...values,
                    permissions: [
                        {
                            section: "SettingsManagement",
                            permissions: {
                                create: false,
                                view: false,
                                edit: false,
                                delete: false,
                            },
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response?.data?.statusCode === 200) {
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

                navigate("/list");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    const handleUpdateUser = async (values) => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.put(
                `${process.env.REACT_APP_API_URL}users/admin/${id}`,
                {
                    ...values,
                    permissions: [
                        {
                            section: "SettingsManagement",
                            permissions: {
                                create: false,
                                view: false,
                                edit: false,
                                delete: false,
                            },
                        },
                    ],
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response?.data?.statusCode === 200) {
                toast.success(response?.data?.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/list");
            }
        } catch (error) {
            toast.error(error?.response?.data?.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    useEffect(() => {
        if (id) {
            const fetchUser = async () => {
                try {
                    const token = localStorage.getItem("token");

                    const response = await axios.get(
                        `${process.env.REACT_APP_API_URL}users/admin/${id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        }
                    );

                    setData(response?.data?.data);
                } catch (error) {
                    console.error("Error fetching users:", error);
                }
            };
            fetchUser();
        }
    }, [id]);

    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <div className="flex justify-between">
                        <h2 className="text-2xl font-bold mb-6">
                            {type === "add" ? "Add" : type === "view" ? "View" : "Edit"}{" "}
                            Member
                        </h2>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 h-10 rounded transition duration-300 ease-in-out"
                            onClick={() => navigate("/list")}
                        >
                            Back
                        </button>
                    </div>

                    <Formik
                        initialValues={id ? initialValues2 : initialValues1}
                        validationSchema={validationSchema}
                        onSubmit={type === "add" ? handleCreateUser : handleUpdateUser}
                        enableReinitialize={true}
                    >
                        {({ isSubmitting }) => (
                            <Form>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        First Name{" "}
                                        {type !== "view" && (
                                            <span className="text-red-500"> *</span>
                                        )}
                                    </label>
                                    <Field
                                        type="text"
                                        name="firstName"
                                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                                            type === "view" ? "cursor-not-allowed" : ""
                                        }`}
                                        disabled={type === "view"}
                                    />
                                    <ErrorMessage
                                        name="firstName"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        Last Name{" "}
                                        {type !== "view" && (
                                            <span className="text-red-500"> *</span>
                                        )}
                                    </label>
                                    <Field
                                        type="text"
                                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                                            type === "view" ? "cursor-not-allowed" : ""
                                        }`}
                                        name="lastName"
                                        disabled={type === "view"}
                                    />
                                    <ErrorMessage
                                        name="lastName"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">
                                        Email{" "}
                                        {type !== "view" && (
                                            <span className="text-red-500"> *</span>
                                        )}
                                    </label>
                                    <Field
                                        type="email"
                                        className={`w-full px-3 py-2 border border-gray-300 rounded-lg ${
                                            type === "view" ? "cursor-not-allowed" : ""
                                        }`}
                                        name="email"
                                        disabled={type === "view"}
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500"
                                    />
                                </div>
                                {type !== "view" && (
                                    <button
                                        type="submit"
                                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                                    >
                                        {type === "add"
                                            ? "Add"
                                            : type === "view"
                                            ? "View"
                                            : "Edit"}{" "}
                                        Member
                                    </button>
                                )}
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
}

export default AddUser;
