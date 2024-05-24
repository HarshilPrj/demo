import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const itemsPerPage = 5;

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.post(
                    `${process.env.REACT_APP_API_URL}users/admin/list`,
                    {
                        search: search,
                        sortField: "updatedAt",
                        sortOrder: "desc",
                        itemsPerPage,
                        page: currentPage,
                        filter: "",
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                setUsers(response?.data?.data?.data);
                setTotalPages(Math.ceil(response?.data?.data?.pageCount / itemsPerPage));
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, [currentPage, search]);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">Members List</h1>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="p-2 rounded focus:outline-none"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
                        onClick={() => navigate("/add")}
                    >
                        Add
                    </button>
                </div>
                <table className="min-w-full bg-white border rounded">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-4 border-b border-gray-300 text-left">
                                S.No
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300 text-left">
                                Name
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300 text-left">
                                Email
                            </th>
                            <th className="py-3 px-4 border-b border-gray-300 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.length !== 0 ? (
                            users.map((user, index) => (
                                <tr
                                    key={user?._id}
                                    className="hover:bg-gray-100 transition duration-200 ease-in-out"
                                >
                                    <td className="py-3 px-4 border-b border-gray-200 text-center">
                                        {(currentPage - 1) * itemsPerPage + index + 1}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-left">
                                        {user?.firstName + " " + user?.lastName}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-left">
                                        {user?.email}
                                    </td>
                                    <td className="py-3 px-4 border-b border-gray-200 text-center">
                                        <div className="flex gap-3 justify-center">
                                            <AiOutlineEye
                                                className="cursor-pointer text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out"
                                                onClick={() =>
                                                    navigate(`/view/${user?._id}`)
                                                }
                                            />
                                            <MdOutlineEdit
                                                className="cursor-pointer text-green-500 hover:text-green-700 transition duration-200 ease-in-out"
                                                onClick={() =>
                                                    navigate(`/edit/${user?._id}`)
                                                }
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr className="flex items-center justify-center h-full p-2">
                                <td className="text-center">No Data</td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <div className="flex justify-between items-center mt-6">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-200 ease-in-out disabled:opacity-50"
                    >
                        Previous
                    </button>
                    <span className="text-lg font-medium">
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-200 ease-in-out disabled:opacity-50"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserList;
