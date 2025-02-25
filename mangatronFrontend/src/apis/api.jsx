import axios from "axios";

// Axios instance with base URL
const Api = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

// Function to get the authentication token dynamically
const getAuthConfig = () => {
    const token = localStorage.getItem("token");
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};

// 🔹 Login API - Stores token in localStorage
export const loginApi = async (data) => {
    try {
        const response = await Api.post("/auth/login", data);
        const token = response?.data?.access_token;

        if (token) {
            localStorage.setItem("token", token);
            console.log("Token Stored:", token);
        } else {
            console.error("No token received from server!");
        }

        return response.data;
    } catch (error) {
        console.error("Login API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

// 🔹 Register API
export const registerApi = async (data) => {
    try {
        const response = await Api.post("/users/create", data);
        return response.data;
    } catch (error) {
        console.error("Registration API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

// 🔹 Get Current Authenticated User
export const getCurrentUser = async () => {
    try {
        const response = await Api.get("/auth/init", getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Get Current User API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

// 🔹 Logout Function - Clears Token
export const logout = () => {
    localStorage.removeItem("token");
    console.log("User logged out, token removed.");
    window.location.href = "/"; // Redirect to login page
};

// 🔹 Get All Users (Admin or Authenticated Users)
export const getAllUsers = async () => {
    try {
        const response = await Api.get("/users", getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Get Users API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

// 🔹 Add Manga
export const addManga = async (formData) => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:4000/api/manga/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData, // No need to modify if `genres` is properly formatted before appending
    });
  
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
  
    return response.json();
  };
  

// 🔹 Get All Manga
export const getManga = async () => {
    try {
        const response = await Api.get("/manga");
        return response.data;
    } catch (error) {
        console.error("Error fetching manga:", error.response?.data || error.message);
        return [];
    }
};

// 🔹 Get Manga by Category (Trending, Recommended, etc.)
export const getMangaByCategory = async (category) => {
    try {
        const response = await Api.get(`/manga/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${category} manga:`, error.response?.data || error.message);
        return [];
    }
}

// 🔹 Add Product
export const addProduct = async (formData) => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:4000/api/products/create", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: formData, // Ensure formData includes an image file
    });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
};

// 🔹 Get All Products
export const getProducts = async () => {
    try {
        const response = await Api.get("/products");
        return response.data;
    } catch (error) {
        console.error("Error fetching products:", error.response?.data || error.message);
        return [];
    }
};

// 🔹 ✅ Get Products by Category (Fix for Store.jsx)
export const getProductsByCategory = async (category) => {
    try {
        const response = await Api.get(`/products/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching products for category ${category}:`, error.response?.data || error.message);
        return [];
    }
};

// 🔹 Delete Product
export const deleteProduct = async (id) => {
    const token = localStorage.getItem("token");
    try {
        await Api.delete(`/products/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return true;
    } catch (error) {
        console.error("Error deleting product:", error.response?.data || error.message);
        return false;
    }
};

export default Api;
