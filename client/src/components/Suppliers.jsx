import React from "react";
import DrawerComponent from "./Drawer";
import SuppliersTable from "./SuppliersTable";

const Suppliers = () => {
    return (
        <>
        <DrawerComponent/>
        <h2>This is  Suppliers page</h2>
        <SuppliersTable />
        </>
    )
}

export default Suppliers;