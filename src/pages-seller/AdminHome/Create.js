import React, { Component } from "react";
//import Select from 'react-select';
import productService from "./../../services/product-service";
import "./Create.css";

class Create extends Component {
  state = {
    name: "",
    price: 0,
    materials: [],
    picture: "",
    stock: 0,
    category: "",
    description: "",
  };



  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      name,
      price,
      materials,
      picture,
      stock,
      category,
      description,
    } = this.state;

    productService.createProduct(
      name,
      price,
      materials,
      picture,
      stock,
      category,
      description
    );

    this.setState({
      name: "",
      price: 0,
      materials: [],
      picture: "",
      stock: "",
      category: "",
      description: "",
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    // const categories = [
    //   { label: "Home", value: 1 },
    //   { label: "Clothes", value: 2 },
    //   { label: "Other", value: 3 },
    // ];

    const {
      name,
      price,
      materials,
      picture,
      stock,
      category,
      description,
    } = this.state;
    return (
      <div>
        <form className="form" onSubmit={this.handleFormSubmit}>
          <label>Product name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
          />

          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={this.handleChange}
          />
          <label>Materials:</label>
          <input
            type="text"
            name="materials"
            value={materials}
            onChange={this.handleChange}
          />
          <label>Picture:</label>
          <input
            type="text"
            name="picture"
            value={picture}
            onChange={this.handleChange}
          />
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={stock}
            onChange={this.handleChange}
          />

          <label>Category:</label>
          <input
            type="text"
            name="category"
            value={category}
            onChange={this.handleChange}
          />
          {/* <Select options={ categories } />  */}

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={this.handleChange}
          />

          <input type="submit" value="Create Product" />
        </form>
      </div>
    );
  }
}

export default Create;
