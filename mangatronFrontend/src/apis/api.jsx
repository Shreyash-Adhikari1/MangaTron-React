import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:4000/api",
    withCredentials: true,
    headers: { "Content-Type": "application/json" },
});

//Funvtion to get token
const getAuthConfig = () => {
    const token = localStorage.getItem("token");
    return token ? { headers: { Authorization: `Bearer ${token}` } } : {};
};


export const loginApi = async (data) => {
    try {
        const response = await Api.post("/auth/login", data);
        const { access_token, user } = response?.data || {};

        if (access_token && user) {
            localStorage.setItem("token", access_token);
            localStorage.setItem("isAdmin", JSON.stringify(user.isAdmin)); 
            console.log("Stored isAdmin:", user.isAdmin);
        } else {
            console.error("Login failed: No token or user data received.");
        }

        return response.data;
    } catch (error) {
        console.error("Login API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};



export const registerApi = async (data) => {
    try {
        const response = await Api.post("/users/create", data);
        console.log("API Response:", response);
        return response.data;
    } catch (error) {
        console.error("Registration API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};


export const getCurrentUser = async () => {
    try {
        const response = await Api.get("/auth/init", getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Get Current User API Error:", error.response?.data || error.message);
        throw error.response?.data || error;
    }
};

//Logout Function {This removes the token from local storage}
export const logout = () => {
    localStorage.removeItem("token");
    console.log("User logged out, token removed.");
    window.location.href = "/"; 
};

//Get All Users
export const getAllUsers = async () => {
    try {
        const response = await Api.get("/users", getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Error fetching users:", error.response?.data || error.message);
        return [];
    }
};

// 🔹 Delete User by ID
export const deleteUserById = async (id) => {
    try {
        const response = await Api.delete(`/users/${id}`, getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Error deleting user:", error.response?.data || error.message);
        throw error;
    }
};

// 🔹 Update User
export const updateUserById = async (id, userData) => {
    try {
        const response = await Api.put(`/users/${id}`, userData, getAuthConfig());
        return response.data;
    } catch (error) {
        console.error("Error updating user:", error.response?.data || error.message);
        throw error;
    }
};

// Add Manga
export const addManga = async (formData) => {
    const token = localStorage.getItem("token");
    const response = await fetch("http://localhost:4000/api/manga/create", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
  
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
  
    return response.json();
  };
  

//Get All Manga
export const getManga = async () => {
    try {
        const response = await Api.get("/manga");
        return response.data;
    } catch (error) {
        console.error("Error fetching manga:", error.response?.data || error.message);
        return [];
    }
};

//Get Manga by Category 
export const getMangaByCategory = async (category) => {
    try {
        const response = await Api.get(`/manga/category/${category}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${category} manga:`, error.response?.data || error.message);
        return [];
    }
}


export const updateManga = async (id, updatedData) => {
    try {
        const token = localStorage.getItem("token"); // Get the token
        const response = await Api.put(`/manga/${id}`, updatedData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`, //Add token for authentication
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating manga:", error.response?.data || error.message);
        throw error;
    }
};


export const deleteManga = async (id) => {
    try {
        const response = await axios.delete(`${API_BASE_URL}/manga/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting manga:", error);
        throw error;
    }
};


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

export const updateProduct = async (id, updatedData) => {
    try {
        const token = localStorage.getItem("token"); // Get the token
        const response = await Api.put(`/products/${id}`, updatedData, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`, // ✅ Add token for authentication
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error.response?.data || error.message);
        throw error;
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

export const deleteById = async (id) => {
    const token = localStorage.getItem("token");
    try {
        await Api.delete(`/manga/${id}`, {
            headers: { Authorization: `Bearer ${token}` },
        });
        return true;
    } catch (error) {
        console.error("Error deleting manga:", error.response?.data || error.message);
        return false;
    }
};


export default Api;
