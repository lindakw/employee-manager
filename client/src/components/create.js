import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
    const [form, setForm] = useState({
        empNum: "",
        fname: "",
        lname: "",
        department: "",
        hireDate: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    // This function will handle the submission.
    async function onSubmit(e) {
        e.preventDefault();

        // When a post request is sent to the create url, we'll add a new record to the datatbase.
        const newPerson = { ...form };

        await fetch("http://localhost:5050/record", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newPerson),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({ empNum: "", fname: "", lname: "", department: "", hireDate: "" });
        navigate("/");
    }

    // This following section willl display the form that takes the input from the user.
    return (
        <div
            style={{ margin: "20px"}}
        >
            <h3>Add New Record</h3>
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="empNum">Employee Number</label>
                    <input
                        type="number"
                        className="form-control"
                        id="empNum"
                        value={form.empNum}
                        onChange={(e) => updateForm({ empNum: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fname">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fname"
                        value={form.fname}
                        onChange={(e) => updateForm({ fname: e.target.value })}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lname">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lname"
                        value={form.lname}
                        onChange={(e) => updateForm({ lname: e.target.value })}
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="department">Department</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="department"
                        value={form.department}
                        onChange={(e) => updateForm({ department: e.target.value })}
                    />
                </div> */}
                <div className="form-group">
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="departmentOptions"
                            id="deptGeneral"
                            value="General Dentistry"
                            checked={form.department === "General Dentistry"}
                            onChange={(e) => updateForm({ department: e.target.value })}
                        />
                        <label htmlFor="deptGeneral" className="form-check-label">General Dentistry</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="departmentOptions"
                            id="deptPediatric"
                            value="Pediatric Dentistry"
                            checked={form.department === "Pediatric Dentistry"}
                            onChange={(e) => updateForm({ department: e.target.value })}
                        />
                        <label htmlFor="deptPediatric" className="form-check-label">Pediatric Dentistry</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="departmentOptions"
                            id="deptRestorative"
                            value="Restorative Dentistry"
                            checked={form.department === "Restorative Dentistry"}
                            onChange={(e) => updateForm({ department: e.target.value })}
                        />
                        <label htmlFor="deptRestorative" className="form-check-label">Restorative Dentistry</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="departmentOptions"
                            id="deptSurgery"
                            value="Surgery"
                            checked={form.department === "Surgery"}
                            onChange={(e) => updateForm({ department: e.target.value })}
                        />
                        <label htmlFor="deptSurgery" className="form-check-label">Surgery</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input 
                            className="form-check-input"
                            type="radio"
                            name="departmentOptions"
                            id="deptOrtho"
                            value="Orthodontics"
                            checked={form.department === "Orthodontics"}
                            onChange={(e) => updateForm({ department: e.target.value })}
                        />
                        <label htmlFor="deptOrtho" className="form-check-label">Orthodontics</label>
                    </div>
                    <div className="form-group">
                    <label htmlFor="hireDate">Hire Date</label>
                    <input
                        type="date"
                        className="form-control"
                        id="hireDate"
                        value={form.hireDate}
                        onChange={(e) => updateForm({ hireDate: e.target.value })}
                    />
                </div>
                </div>
                <div className="form-group">
                    <input 
                        type="submit"
                        value="Add Employee"
                        className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
}