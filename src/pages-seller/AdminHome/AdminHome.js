import React, { Component } from 'react'

import productService from "./../../services/product-service"
import Create from './Create'



 const AdminHome = () => {
    return (
        <div>
            this is the admin page, create products, edit products, delete products, edit profile
            <Create />
        </div>
    )
}

export default AdminHome;