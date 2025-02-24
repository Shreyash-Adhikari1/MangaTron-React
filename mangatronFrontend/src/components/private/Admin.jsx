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
} from "../../styles/AdminStyles";
import { logout } from "../../apis/api";
import { addManga } from "../../apis/api";

export default function Admin() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    author: "",
    description: "",
    status: "ongoing",
    image: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("url", formData.url);
    formDataToSend.append("author", formData.author);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("status", formData.status);
    formDataToSend.append("image", formData.image);
  
    try {
      const response = await addManga(formDataToSend);
      alert("Manga added successfully!");
    } catch (error) {
      alert(`Error: ${error.error || "Failed to add manga"}`);
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
          <DashboardItem onClick={() => setSelectedOption("addManga")}>Add Manga</DashboardItem>
          <DashboardItem onClick={() => setSelectedOption("addProduct")}>Add Product</DashboardItem>
        </Dashboard>

        {/* Show Add Manga Form when selected */}
        {selectedOption === "addManga" && (
          <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
            <h2>Add Manga</h2>
            <input type="text" name="name" placeholder="Manga Name" onChange={handleChange} required />
            <input type="text" name="url" placeholder="Manga URL" onChange={handleChange} required />
            <input type="text" name="author" placeholder="Author" onChange={handleChange} required />
            <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>
            <select name="status" onChange={handleChange}>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
              <option value="hiatus">Hiatus</option>
            </select>
            <input type="file" name="image" accept="image/*" onChange={handleImageChange} required />
            <button type="submit">Add Manga</button>
          </form>
        )}
      </ContentFrame>
    </AdminContainer>
  );
}
