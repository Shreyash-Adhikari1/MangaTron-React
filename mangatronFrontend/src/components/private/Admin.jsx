import React, { useState } from "react";
import {
  AdminContainer,
  NavFrame,
  UserMenuTitle,
  ContentFrame,
  Dashboard,
  DashboardTitle,
  DashboardItem,
  NavTitle,
  FormContainer,
  Form,
  Input,
  TextArea,
  FileInputLabel,
  SubmitButton,
  StatusSelect,
  SectionTitle,
} from "../../styles/AdminStyles";
import { logout, addManga, addProduct } from "../../apis/api";

export default function Admin() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    author: "",
    description: "",
    status: "ongoing",
    category: "",
    genres: "",
    image: "", 
  });

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "", 
    image: "",
  });

  const [loading, setLoading] = useState(false); 

  // Handle input changes for Manga & Product
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleProductChange = (e) => {
    const { name, value } = e.target;
    setProductData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload for Manga & Product
  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0] || "", 
    }));
  };
  
  const handleProductImageChange = (e) => {
    setProductData((prev) => ({
      ...prev,
      image: e.target.files[0] || "", 
    }));
  };

  // Handle Manga form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const mangaData = new FormData();
    mangaData.append("name", formData.name);
    mangaData.append("url", formData.url);
    mangaData.append("author", formData.author);
    mangaData.append("description", formData.description);
    mangaData.append("status", formData.status);
    mangaData.append("category", formData.category);

    // Ensure genres input is valid
    const genresArray = formData.genres
      .split(",")
      .map((genre) => genre.trim())
      .filter((genre) => genre); // Remove empty values

    genresArray.forEach((genre) => mangaData.append("genres", genre));

    if (formData.image) {
      mangaData.append("image", formData.image);
    }

    try {
      await addManga(mangaData);
      alert("Manga added successfully!");
      setFormData({
        name: "",
        url: "",
        author: "",
        description: "",
        status: "ongoing",
        category: "",
        genres: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding manga:", error);
      alert("Failed to add manga.");
    } finally {
      setLoading(false);
    }
  };

  // Handle Product form submission
  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const productFormData = new FormData();
    productFormData.append("name", productData.name);
    productFormData.append("description", productData.description);
    productFormData.append("category", productData.category);
    productFormData.append("price", productData.price);
    productFormData.append("stock", productData.stock);

    if (productData.image) {
      productFormData.append("image", productData.image);
    }

    console.log("Submitting Product:", Object.fromEntries(productFormData.entries()));

    try {
      await addProduct(productFormData);
      alert("Product added successfully!");
      setProductData({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: "",
      });
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AdminContainer>
      {/* Sidebar */}
      <NavFrame>
        <NavTitle>MangaTron Admin Dashboard</NavTitle>
        <UserMenuTitle onClick={() => logout()}>Logout</UserMenuTitle>
      </NavFrame>

      {/* Main Content */}
      <ContentFrame>
        <Dashboard>
          <DashboardTitle>Admin Dashboard</DashboardTitle>
          <DashboardItem onClick={() => setSelectedOption("addManga")}>
            Add Manga
          </DashboardItem>
          <DashboardItem onClick={() => setSelectedOption("addProduct")}>
            Add Product
          </DashboardItem>
        </Dashboard>

        {/* Add Manga Form */}
        {selectedOption === "addManga" && (
          <FormContainer>
            <SectionTitle>ADD MANGA</SectionTitle>
            <Form onSubmit={handleSubmit}>
              <Input type="text" name="name" value={formData.name} placeholder="Manga Name" onChange={handleChange} required />
              <Input type="text" name="url" value={formData.url} placeholder="Manga URL" onChange={handleChange} required />
              <Input type="text" name="author" value={formData.author} placeholder="Author" onChange={handleChange} required />
              <TextArea name="description" value={formData.description} placeholder="Description" onChange={handleChange} required />

              <StatusSelect name="category" value={formData.category} onChange={handleChange} required>
                <option value="">Select Category</option>
                <option value="trending">Trending</option>
                <option value="recommended">Recommended</option>
                <option value="latest">Latest</option>
              </StatusSelect>

              <Input type="text" name="genres" value={formData.genres} placeholder="Genres (comma-separated)" onChange={handleChange} required />

              <FileInputLabel>
                <input type="file" name="image" accept="image/*" onChange={handleImageChange} required hidden />
                {formData.image ? formData.image.name : "Choose File"}
              </FileInputLabel>

              <SubmitButton type="submit" disabled={loading}>{loading ? "Adding..." : "Add Manga"}</SubmitButton>
            </Form>
          </FormContainer>
        )}

        {/* Add Product Form */}
        {selectedOption === "addProduct" && (
          <FormContainer>
            <SectionTitle>ADD PRODUCT</SectionTitle>
            <Form onSubmit={handleProductSubmit}>
              <Input type="text" name="name" value={productData.name} placeholder="Product Name" onChange={handleProductChange} required />
              <TextArea name="description" value={productData.description} placeholder="Description" onChange={handleProductChange} required />

              <StatusSelect name="category" value={productData.category} onChange={handleProductChange} required>
                <option value="">Select Category</option>
                <option value="Manga">Manga</option>
                <option value="Merchandise">Merchandise</option>
                <option value="Figurines">Figurines</option>
                <option value="Posters">Posters</option>
              </StatusSelect>

              <Input type="number" name="price" value={productData.price} placeholder="Price" onChange={handleProductChange} required />
              <Input type="number" name="stock" value={productData.stock} placeholder="Stock Quantity" onChange={handleProductChange} required />

              <FileInputLabel>
                <input type="file" name="image" accept="image/*" onChange={handleProductImageChange} required hidden />
                {productData.image ? productData.image.name : "Choose File"}
              </FileInputLabel>

              <SubmitButton type="submit" disabled={loading}>{loading ? "Adding..." : "Add Product"}</SubmitButton>
            </Form>
          </FormContainer>
        )}
      </ContentFrame>
    </AdminContainer>
  );
}
