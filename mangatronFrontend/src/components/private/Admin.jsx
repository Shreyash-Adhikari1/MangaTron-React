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
import { logout, addManga } from "../../apis/api";

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
    image: null,
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const mangaData = new FormData();
    mangaData.append("name", formData.name);
    mangaData.append("url", formData.url);
    mangaData.append("author", formData.author);
    mangaData.append("description", formData.description);
    mangaData.append("status", formData.status);
    mangaData.append("category", formData.category);

    // 🔹 Ensure genres is sent as an array, even if it's a comma-separated string
    const genresArray = formData.genres.split(",").map((genre) => genre.trim());
    genresArray.forEach((genre) => mangaData.append("genres", genre));

    if (formData.image) {
      mangaData.append("image", formData.image);
    }

    try {
      await addManga(mangaData);
      alert("Manga added successfully!");

      // Reset form fields after submission
      setFormData({
        name: "",
        url: "",
        author: "",
        description: "",
        status: "ongoing",
        category: "",
        genres: "",
        image: null,
      });
    } catch (error) {
      console.error("Error adding manga:", error);
      alert("Failed to add manga.");
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
            <SectionTitle>ADD MANGA FILE</SectionTitle>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Manga Name"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="url"
                value={formData.url}
                placeholder="Manga URL"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="author"
                value={formData.author}
                placeholder="Author"
                onChange={handleChange}
                required
              />
              <TextArea
                name="description"
                value={formData.description}
                placeholder="Description"
                onChange={handleChange}
                required
              />

              <FileInputLabel>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                  hidden
                />
                Choose File
              </FileInputLabel>

              {/* Status Selection */}
              <StatusSelect
                name="status"
                value={formData.status}
                onChange={handleChange}
                required
              >
                <option value="ongoing">Ongoing</option>
                <option value="completed">Completed</option>
                <option value="hiatus">Hiatus</option>
              </StatusSelect>

              {/* Category Selection */}
              <StatusSelect
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="trending">Trending</option>
                <option value="recommended">Recommended</option>
                <option value="latest">Latest</option>
              </StatusSelect>

              {/* Genres Selection (Comma-separated values) */}
              <Input
                type="text"
                name="genres"
                value={formData.genres}
                placeholder="Enter Genres (comma-separated)"
                onChange={handleChange}
                required
              />

              <SubmitButton type="submit">Add Manga</SubmitButton>
            </Form>
          </FormContainer>
        )}
      </ContentFrame>
    </AdminContainer>
  );
}
