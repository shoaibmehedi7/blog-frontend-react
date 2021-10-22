class Category {
    constructor({ name = "", description = "",uid = null,image = ""}) {
        this.name = name || "";
        this.description = description || "";
        this.image = image || "";
        this.createdABy = uid || null;
        this.createdAt =null;
        this.updatedAt = new Date();
    }
}
export default Category;


