import axios from "axios";


class ProductService {
  constructor() {
    // this.api  is a reusable axios request base containing the base url (baseURL)
    // of the API and the Headers options ( `withCredentials: true` )
    this.productApi = axios.create({
      baseURL: "http://localhost:5000/api",
      withCredentials: true,
    });
  }
                                     // repasar esto, brandId, debería ser brand name?
  createProduct(name, brandId, price, materials, picture, stock ){
      const pr = this.productApi
      .post("/create",{
          name,
          brandId,
          price,
          materials,
          picture,
          stock
      })
      .then((response) => response.data)
      .catch((err) => console.log('product-service - createProduct error', err))
  };

  getAllProducts() {
    const pr = this.productApi
    .get("/products")
    .then((response) => response.data)
    .catch((err) => console.log('product-service ! - getAllProducts error', err))

    return pr;
  };


  getProductById(id) {
    const pr = this.productApi
    .get(`/${id}`)
    .then((response) => response.data)
    .catch((err) => console.log('product-service - getProductById error', err))

    return pr;
  };

  updateProduct(id, name, brandId, price, materials, picture, stock ) {
    const pr = this.productApi
      .post(`/update/${id}`, {
        name, 
        brandId, 
        price, 
        materials, 
        picture, 
        stock 
      })
      .then((response) => response.data)
      .catch((err) =>
        console.log("product-service - updateProduct error => ", err)
      );
    return pr;
  }


  deleteOne = (id) => {
    const pr = this.api.delete(`/product/${id}`);

    return pr;
  };
}

const productService = new ProductService();

export default productService;
