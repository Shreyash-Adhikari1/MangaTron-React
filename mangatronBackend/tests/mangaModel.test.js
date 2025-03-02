const SequelizeMock = require("sequelize-mock");
const dbMock = new SequelizeMock();

const MangaMock = dbMock.define("Manga", {
  id: 1,
  name: "Test Manga",
  url: "https://manga.com",
  image: "test.jpg",
  description: "This is a test manga",
});

async function createMangaWithValidation(data) {
  if (!data.name || !data.url) {
    throw new Error("Validation error: Name and URL are required");
  }
  return MangaMock.create(data);
}

describe("Manga Model", () => {
  it("should create a manga", async () => {
    const manga = await createMangaWithValidation({
      name: "New Manga",
      url: "https://newmanga.com",
      image: "new.jpg",
      description: "A new test manga",
    });

    expect(manga.name).toBe("New Manga");
    expect(manga.url).toBe("https://newmanga.com");
    expect(manga.image).toBe("new.jpg");
    expect(manga.description).toBe("A new test manga");
  });

  it("should require a name and url", async () => {
    await expect(createMangaWithValidation({})).rejects.toThrow(
      "Validation error: Name and URL are required"
    );
  });
});
