"use client";
import React, { useState } from "react";

const Add = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        role: "",
        salary: "",
        joiningDate: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch("/api/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    salary: parseFloat(formData.salary),
                }),
            });

            if (res.ok) {
                alert("Employee added successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    password: "",
                    role: "",
                    salary: "",
                    joiningDate: "",
                });
            } else {
                alert("Failed to add employee");
            }
        } catch (err) {
            alert("Server error");
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center w-full h-[95.7vh]">
                <div className="w-[60vw] h-full bg-white text-black flex justify-center items-center flex-wrap gap-4">
                    <div className="mx-25">
                        <h2>Employee User Name:</h2>
                        <input
                            className="input"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            type="text"
                            placeholder="User Name"
                            required
                        />
                    </div>
                    <div className="mx-25">
                        <h2>Employee Email id:</h2>
                        <input
                            className="input"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mx-25">
                        <h2>Employee Phone no.</h2>
                        <input
                            className="input"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder="Phone no."
                            required
                        />
                    </div>
                    <div className="mx-25">
                        <h2>Alot a password:</h2>
                        <input
                            className="input"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            type="text"
                            placeholder="Password"
                            required
                        />
                    </div>
                    <div className="mx-25">
                        <h2>Job Role:</h2>
                        <select
                            className="input"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}>
                            {/* <option name="jobrole" disabled>
                                Job Role
                            </option> */}
                            <option value="junior-developer">Junior Developer</option>
                            <option value="senior-developer">Senior Developer</option>
                            <option value="project-lead">Project Lead</option>
                            <option value="intern">Intern</option>
                            <option value="manager">Manager</option>
                            <option value="hr">HR</option>
                        </select>
                    </div>
                    <div className="mx-25">
                        <h2>Salary:</h2>
                        <input
                            className="input"
                            name="salary"
                            value={formData.salary}
                            onChange={handleChange}
                            type="text"
                            placeholder="Salary"
                            required
                        />
                    </div>
                    <div className="mx-25">
                        <h2>Date and Time of Joining:</h2>
                        <input
                            className="input"
                            name="joiningDate"
                            value={formData.joiningDate}
                            onChange={handleChange}
                            type="date"
                            required
                        />
                    </div>
                    <div className="border border-black mx-25 px-4 py-2 bg-blue-600 text-white rounded">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default Add;
