import React from 'react';
import AdminLayout from "../components/adminLayout"

const AdminMenus = (props) => {
    return (
        <AdminLayout history={props.history}>
            Hello, Jasur
        </AdminLayout>
    );
};

export default AdminMenus;