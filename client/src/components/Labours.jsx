import React from "react";
import DrawerComponent from "./Drawer";
import LabourTable from "./LabourTable";

const Labours = () => {
    return (
        <>
        <DrawerComponent/>
        <h2>This is Labours page</h2>
        <LabourTable />
        </>
    )
}

export default Labours;