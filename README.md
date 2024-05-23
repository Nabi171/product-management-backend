# Product Management Backend

This project provides a simple backend API for managing products and orders. It includes endpoints for creating, reading, updating, and deleting products, as well as creating and retrieving orders. The API is built using Node.js and Express.

## API Endpoints

### Products

- **Create Product**

  - **Endpoint:** `POST /api/products/`
  - **Description:** Creates a new product.

- **Get All Products**

  - **Endpoint:** `GET /api/products/`
  - **Description:** Retrieves a list of all products.

- **Get Single Product**

  - **Endpoint:** `GET /api/products/:productId`
  - **Description:** Retrieves a product by its ID.
  - **Example:** `GET /api/products/664b0b02704f5c19c876c770`

- **Search Products by Name**

  - **Endpoint:** `GET /api/products?searchTerm=name`
  - **Description:** Searches for products by name.
  - **Example:** `GET /api/products?searchTerm=samsung`

- **Update Product**

  - **Endpoint:** `PUT /api/products/:productId`
  - **Description:** Updates a product by its ID.
  - **Example:** `PUT /api/products/664b0b02704f5c19c876c770`

- **Delete Product**
  - **Endpoint:** `DELETE /api/products/:productId`
  - **Description:** Deletes a product by its ID.
  - **Example:** `DELETE /api/products/664b0b02704f5c19c876c770`

### Orders

- **Create Order**

  - **Endpoint:** `POST /api/orders`
  - **Description:** Creates a new order.

- **Get All Orders**

  - **Endpoint:** `GET /api/orders/`
  - **Description:** Retrieves a list of all orders.

- **Get Orders by Email**
  - **Endpoint:** `GET /api/orders?email=email`
  - **Description:** Retrieves orders associated with a specific email.
  - **Example:** `GET /api/orders?email=level5@programming-hero.com`

## Running the Server

To run the server locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/product-management-backend.git
   cd product-management-backend
   ```

api request for Product

# create product req: http://localhost:5000/api/products/

# get all prodcucts req: http://localhost:5000/api/products/

# get single Product req: http://localhost:5000/api/products/664b0b02704f5c19c876c770

# Search reqByName: http://localhost:5000/api/products?searchTerm=samsung

# post req: http://localhost:5000/api/products/

# put Update req: http://localhost:5000/api/products/664b0b02704f5c19c876c770

# delete Product: http://localhost:5000/api/products/664b0b02704f5c19c876c770

api request for Product

# post a order req: http://localhost:5000/api/orders

# get all orders req: http://localhost:5000/api/products/

# get the order byEmail: http://localhost:5000/api/orders?email=level5@programming-hero.com
