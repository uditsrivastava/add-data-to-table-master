import React, { useState } from "react";
import './table.css'

import { connect } from "react-redux";
import { addData } from "../action/table";
import { v4 } from "uuid";

const Table = ( {table, addData} ) => {
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
        </div>
    )
}

const mapStateToProps = (state) => ({
    table: state.table,
});

const mapDispatchToProps = (dispatch) => ({
    addData: (data) => {
        dispatch(addData(data));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);