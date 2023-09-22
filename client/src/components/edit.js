import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function Edit() {
    const [form, setForm] = useState({
        empNum: "",
        fname: "",
        lname: "",
        department: "",
        hireDate: "",
        records: [],
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();
            const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const record = await response.json();
            if (!record) {
                window.alert(`Record with id ${id} not found`);
                navigate("/");
                return;
            }

            setForm(record);
        }

        fetchData();

        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedPerson = {
            empNum: form.empNum,
            fname: form.fname,
            lname: form.lname,
            department: form.department,
            hireDate: form.hireDate,
        };

        // This will send a post request to update the data in the database.
        await fetch(`http://localhost:5050/record/${params.id}`, {
            method: "PATCH",
            body: JSON.stringify(editedPerson),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        navigate("/");
    }

    // This following section will display the form that takes input from the user to update the data
    return (
        <div>
            <h3>Update Record</h3>
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