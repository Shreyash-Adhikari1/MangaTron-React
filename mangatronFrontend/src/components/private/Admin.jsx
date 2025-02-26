import React, { useState, useEffect } from "react";
import {
  AdminContainer,
  NavFrame,
  UserMenuTitle,
  ContentFrame,
  Dashboard,
  DashboardTitle,
  DashboardItem,
  NavTitle,
  NavItemsFrame,
  NavItems,
  FormContainer,
  Form,
  Input,
  TextArea,
  FileInputLabel,
  SubmitButton,
  StatusSelect,
  SectionTitle,
  Table,
  TableContainer,
  TableData,
  TableHeader,
  TableRow,
  ActionButton,
  ActionContainer,
} from "../../styles/AdminStyles";
import {
  logout,
  addManga,
  addProduct,
  getManga,
  getProducts,
  getAllUsers,
  deleteProduct,
  deleteById,
  updateManga,
  updateProduct,
  deleteManga,
} from "../../apis/api";
import { Link } from "react-router-dom";

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

  const [loadingManga, setLoadingManga] = useState(false);
  const [loadingProduct, setLoadingProduct] = useState(false);
  const [mangaList, setMangaList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [editingMangaId, setEditingMangaId] = useState(null);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    if (selectedOption === "viewManga") {
      getManga().then(setMangaList).catch(console.error);
    }
    if (selectedOption === "viewProduct") {
      getProducts().then(setProductList).catch(console.error);
    }
  }, [selectedOption]);

  const handleDeleteManga = async (id) => {
    await deleteById(id);
    setMangaList(mangaList.filter((manga) => manga.id !== id));
  };

  const handleDeleteProduct = async (id) => {
    await deleteProduct(id);
    setProductList(productList.filter((product) => product.id !== id));
  };

  const handleEditManga = (manga) => {
    setEditingMangaId(manga.id);
    setFormData({
      name: manga.name,
      url: manga.url,
      author: manga.author,
      description: manga.description,
      status: manga.status,
      category: manga.category,
      genres: manga.genres ? manga.genres.join(", ") : "",
      image: "",
    });
    setSelectedOption("addManga");
  };

  const handleEditProduct = (product) => {
    setEditingProductId(product.id);
    setProductData({
      name: product.name,
      description: product.description,
      category: product.category,
      price: product.price,
      stock: product.stock,
      image: "",
    });
    setSelectedOption("addProduct");
  };

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
    setLoadingManga(true);

    const mangaData = new FormData();
    mangaData.append("name", formData.name);
    mangaData.append("url", formData.url);
    mangaData.append("author", formData.author);
    mangaData.append("description", formData.description);
    mangaData.append("status", formData.status);
    mangaData.append("category", formData.category);

    const genresArray = formData.genres
      .split(",")
      .map((genre) => genre.trim())
      .filter((genre) => genre);

    genresArray.forEach((genre) => mangaData.append("genres", genre));

    if (formData.image) {
      mangaData.append("image", formData.image);
    }

    try {
      if (editingMangaId) {
        await updateManga(editingMangaId, mangaData);
        alert("Manga updated successfully!");
      } else {
        await addManga(mangaData);
        alert("Manga added successfully!");
      }

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

      setEditingMangaId(null);
    } catch (error) {
      console.error("Error submitting manga:", error);
      alert("Failed to submit manga.");
    } finally {
      setLoadingManga(false);
    }
  };

  const handleProductSubmit = async (e) => {
    e.preventDefault();
    setLoadingProduct(true);

    const productFormData = new FormData();
    productFormData.append("name", productData.name);
    productFormData.append("description", productData.description);
    productFormData.append("category", productData.category);
    productFormData.append("price", productData.price);
    productFormData.append("stock", productData.stock);

    if (productData.image) {
      productFormData.append("image", productData.image);
    }

    try {
      if (editingProductId) {
        // Update existing product
        await updateProduct(editingProductId, productFormData);
        alert("Product updated successfully!");
      } else {
        await addProduct(productFormData);
        alert("Product added successfully!");
      }

      setProductData({
        name: "",
        description: "",
        category: "",
        price: "",
        stock: "",
        image: "",
      });

      setEditingProductId(null);
    } catch (error) {
      console.error("Error submitting product:", error);
      alert("Failed to submit product.");
    } finally {
      setLoadingProduct(false);
    }
  };

  return (
    <AdminContainer>
      {/* Sidebar */}
      <NavFrame>
        <NavTitle>MangaTron Admin Dashboard</NavTitle>

        <NavItemsFrame>
          <Link to="/home"><NavItems>Home</NavItems>{" "}</Link>
          <NavItems onClick={() => logout()}>Logout</NavItems>
        </NavItemsFrame>
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
          <DashboardItem onClick={() => setSelectedOption("viewManga")}>
            View Manga
          </DashboardItem>
          <DashboardItem onClick={() => setSelectedOption("viewProduct")}>
            View Product
          </DashboardItem>
          <DashboardItem onClick={() => setSelectedOption("viewUser ")}>
            View User
          </DashboardItem>
        </Dashboard>

        {/* Add Manga Form */}
        {selectedOption === "addManga" && (
          <FormContainer>
            <SectionTitle>ADD MANGA</SectionTitle>
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

              <Input
                type="text"
                name="genres"
                value={formData.genres}
                placeholder="Genres (comma-separated)"
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
                {formData.image ? formData.image.name : "Choose File"}
              </FileInputLabel>

              <SubmitButton type="submit" disabled={loadingManga}>
                {loadingManga ? "Adding..." : "Add Manga"}
              </SubmitButton>
            </Form>
          </FormContainer>
        )}

        {/* Add Product Form */}
        {selectedOption === "addProduct" && (
          <FormContainer>
            <SectionTitle>ADD PRODUCT</SectionTitle>
            <Form onSubmit={handleProductSubmit}>
              <Input
                type="text"
                name="name"
                value={productData.name}
                placeholder="Product Name"
                onChange={handleProductChange}
                required
              />
              <TextArea
                name="description"
                value={productData.description}
                placeholder="Description"
                onChange={handleProductChange}
                required
              />

              <StatusSelect
                name="category"
                value={productData.category}
                onChange={handleProductChange}
                required
              >
                <option value="">Select Category</option>
                <option value="Manga">Manga</option>
                <option value="Merchandise">Merchandise</option>
                <option value="Figurines">Figurines</option>
                <option value="Posters">Posters</option>
              </StatusSelect>

              <Input
                type="number"
                name="price"
                value={productData.price}
                placeholder="Price"
                onChange={handleProductChange}
                required
              />
              <Input
                type="number"
                name="stock"
                value={productData.stock}
                placeholder="Stock Quantity"
                onChange={handleProductChange}
                required
              />

              <FileInputLabel>
                <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleProductImageChange}
                  required
                  hidden
                />
                {productData.image ? productData.image.name : "Choose File"}
              </FileInputLabel>

              <SubmitButton type="submit" disabled={loadingProduct}>
                {loadingProduct ? "Adding..." : "Add Product"}
              </SubmitButton>
            </Form>
          </FormContainer>
        )}

        {selectedOption === "viewManga" && (
          <FormContainer>
            <SectionTitle>VIEW MANGA</SectionTitle>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Author</TableHeader>
                    <TableHeader>Category</TableHeader>
                    <TableHeader>Status</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {mangaList.map((manga) => (
                    <TableRow key={manga.id}>
                      <TableData>{manga.name}</TableData>
                      <TableData>{manga.author}</TableData>
                      <TableData>{manga.category}</TableData>
                      <TableData>{manga.status}</TableData>
                      <TableData>
                        <ActionButton onClick={() => handleEditManga(manga)}>
                          Edit
                        </ActionButton>
                        <ActionButton
                          onClick={() => handleDeleteManga(manga.id)}
                        >
                          Delete
                        </ActionButton>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </FormContainer>
        )}

        {selectedOption === "viewProduct" && (
          <FormContainer>
            <SectionTitle>VIEW PRODUCTS</SectionTitle>
            <TableContainer>
              <Table>
                <thead>
                  <TableRow>
                    <TableHeader>Name</TableHeader>
                    <TableHeader>Category</TableHeader>
                    <TableHeader>Price</TableHeader>
                    <TableHeader>Stock</TableHeader>
                    <TableHeader>Actions</TableHeader>
                  </TableRow>
                </thead>
                <tbody>
                  {productList.map((product) => (
                    <TableRow key={product.id}>
                      <TableData>{product.name}</TableData>
                      <TableData>{product.category}</TableData>
                      <TableData>${product.price}</TableData>
                      <TableData>{product.stock}</TableData>
                      <TableData>
                        <ActionButton
                          onClick={() => handleEditProduct(product)}
                        >
                          Edit
                        </ActionButton>
                        <ActionButton
                          onClick={() => handleDeleteProduct(product.id)}
                        >
                          Delete
                        </ActionButton>
                      </TableData>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </FormContainer>
        )}
        {selectedOption === "viewUsers" && (
          <FormContainer>
            <SectionTitle>VIEW USERS</SectionTitle>
            {userList.length > 0 ? (
              userList.map((user) => <div key={user.id}>{user.name}</div>)
            ) : (
              <p>No users found.</p>
            )}
          </FormContainer>
        )}
      </ContentFrame>
    </AdminContainer>
  );
}
