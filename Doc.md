```
npm install \
  express \                # Web framework for building web applications
  express-session \        # Session management middleware for Express
  graphql \                # A query language for APIs and a runtime for executing those queries
  @apollo/server \         # Apollo Server library for setting up a GraphQL API server
  @graphql-tools/merge \   # Utility for merging multiple GraphQL schemas
  bcryptjs \               # Library to hash and compare passwords securely
  connect-mongodb-session \ # MongoDB session store for Express sessions
  dotenv \                 # Loads environment variables from a `.env` file
  graphql-passport \       # Passport.js integration with GraphQL for authentication
  passport \               # Middleware for handling authentication strategies
  mongoose \               # MongoDB object modeling tool for Node.js
```
```
npm install express express-session graphql @apollo/server @graphql-tools/merge bcryptjs connect-mongodb-session dotenv graphql-passport passport mongoose nodemon
```
**Features:**
- **Breadcrumbs**
- **Tabs** For four categories
- **Pagination**, **Multi-field filtering**, **Sort buttons**, searchbar, protect routes, shopping cart, What user bought see, relationship 

**Admin Dashboard:**
- **Inventory Tab:** View, add, edit, and delete products.
- **User Tab:** View, create, edit, and delete users.

**User Interface (Frontend):**
- **Product List:** Display products with images, names, descriptions, and prices.
- **Product Details:** Detailed view of products.
- **Add to Cart:** Users can add products to the cart (checkout optional).

**User Authentication:**
- **Admin:** Login with username and password.
- **User:** Optional account system or browse as guest.

**API (Backend):**
- GraphQL API for products and users.
- CRUD operations for products and users.
--- 

Here are the features for your product listing UI:

### **Filtering & Search:**
1. **Multi-field filtering** – Users can filter products by multiple criteria (e.g., brand, rating).  
2. **Text input for search queries** – Users can search for products by name or description.  
3. **Debounced search input** – Optimizes performance by reducing unnecessary API calls while typing.  
4. **Filter by category** – Users can filter products by selecting a category from a dropdown or buttons.  

### **Sorting:**
5. **Sort buttons** – Options like "Low to High" and "High to Low" for sorting products by price.  

### **Pagination:**
6. **Pagination support** – Products are displayed in chunks, improving usability and performance.  

### **Reset & UI Controls:**
7. **Reset button** – Clears all filters, search inputs, and sorting to restore the default product list.  

Let me know if you need more details or want additional features! 🚀