import React, { useState } from "react";
import './table.css'

import { connect } from "react-redux";
import { addData, removeData, changeStatus } from "../action/table";
import { v4 } from "uuid";

const Table = ( {table, addData, removeData, changeStatus} ) => {
    const [taskName, setTaskName] = useState("")
    const [finalData, setFinalData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (addData === "") {
            return alert("Please add a data");
        }

        const tableData = {
            taskName,
            id: v4(),
            status: "In-Progress"
        };

        addData(tableData);
        setFinalData(finalData)

        setTaskName("");
    };

    return (
        <div>
            <form action="/action_page.php">
                <span><input type="text" name="firstname" placeholder="Add Value" value={taskName} onChange={(e) => setTaskName(e.target.value)} /></span>
                <span><input type="submit" value="Add" onClick={handleSubmit} /></span>
            </form>
            { }
            <table>
                <tr>
                    <th>Task Name</th>
                    <th>Status</th>
                    <th>Action</th>
                </tr>
                
                    {table === [] ? <tr><td>No Data</td></tr>: 
                    table.map((datas) => (
                        <>
                        <tr>
                            <td>{datas.taskName}</td>
                            <td>{datas.status}</td>
                            <td>
                                <button onClick={() => removeData(datas.id)}>
                                    Delete
                                </button>
                                <button onClick={() => changeStatus(datas.id)}>
                                    Change Status
                                </button>
                            </td>
                            </tr>
                        </>
                    ))}
            </table>
        </div>
    )
}

const mapStateToProps = (state) => ({
    table: state.table,
});

const mapDispatchToProps = dispatch => ({
    addData: (data) => dispatch(addData(data)),
    removeData: (id) => dispatch(removeData(id)),
    changeStatus: (id) => dispatch(changeStatus(id))
 })

export default connect(mapStateToProps, mapDispatchToProps)(Table);