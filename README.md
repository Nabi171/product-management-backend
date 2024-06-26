# Product Management Backend

This project provides a simple backend API for managing products and orders. It includes endpoints for creating, reading, updating, and deleting products, as well as creating and retrieving orders. The API is built using Node.js and Express.

## API Endpoints

### Products

- **Create Product**

  - **Endpoint:** [`POST https://next-level-assignment-02.vercel.app/api/products/`](https://next-level-assignment-02.vercel.app/api/products/)
  - **Description:** Creates a new product.

- **Get All Products**

  - **Endpoint:** [`GET https://next-level-assignment-02.vercel.app/api/products/`](https://next-level-assignment-02.vercel.app/api/products/)
  - **Description:** Retrieves a list of all products.

- **Get Single Product**

  - **Endpoint:** [`GET https://next-level-assignment-02.vercel.app/api/products/:productId`](https://next-level-assignment-02.vercel.app/api/products/:productId)
  - **Description:** Retrieves a product by its ID.
  - **Example:** [`GET https://next-level-assignment-02.vercel.app/api/products/664b0b02704f5c19c876c770`](https://next-level-assignment-02.vercel.app/api/products/664ed3f0e0400353500ba952)

- **Search Products by Name**

  - **Endpoint:** [`GET https://next-level-assignment-02.vercel.app/api/products?searchTerm=name`](https://next-level-assignment-02.vercel.app/api/products?searchTerm=name)
  - **Description:** Searches for products by name.
  - **Example:** [`GET https://next-level-assignment-02.vercel.app/api/products?searchTerm=samsung`](https://next-level-assignment-02.vercel.app/api/products?searchTerm=samsung)

- **Update Product**

  - **Endpoint:** [`PUT https://next-level-assignment-02.vercel.app/api/products/:productId`](https://next-level-assignment-02.vercel.app/api/products/:productId)
  - **Description:** Updates a product by its ID.
  - **Example:** [`PUT https://next-level-assignment-02.vercel.app/api/products/664b0b02704f5c19c876c770`](https://next-level-assignment-02.vercel.app/api/products/664ed3f0e0400353500ba952)

- **Delete Product**
  - **Endpoint:** [`DELETE https://next-level-assignment-02.vercel.app/api/products/:productId`](https://next-level-assignment-02.vercel.app/api/products/:productId)
  - **Description:** Deletes a product by its ID.
  - **Example:** [`DELETE https://next-level-assignment-02.vercel.app/api/products/664b0b02704f5c19c876c770`](https://next-level-assignment-02.vercel.app/api/products/664ed3f0e0400353500ba952)

### Orders

- **Create Order**

  - **Endpoint:** [`POST https://next-level-assignment-02.vercel.app/api/orders`](https://next-level-assignment-02.vercel.app/api/orders)
  - **Description:** Creates a new order.

- **Get All Orders**

  - **Endpoint:** [`GET https://next-level-assignment-02.vercel.app/api/orders/`](https://next-level-assignment-02.vercel.app/api/orders/)
  - **Description:** Retrieves a list of all orders.

- **Get Orders by Email**
  - **Endpoint:** [`GET https://next-level-assignment-02.vercel.app/api/orders?email=email`](https://next-level-assignment-02.vercel.app/api/orders?email=email)
  - **Description:** Retrieves orders associated with a specific email.
  - **Example:** [`GET https://next-level-assignment-02.vercel.app/api/orders?email=level5@programming-hero.com`](https://next-level-assignment-02.vercel.app/api/orders?email=level5@programming-hero.com)

## Running the Server

To run the server locally, follow these steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/product-management-backend.git
   cd product-management-backend
   ```
