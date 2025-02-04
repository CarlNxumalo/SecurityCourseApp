class Course {
    /**
     * @param {any} courseID
     * @param {string | any[]} name
     * @param {any} path
     * @param {any} about
     * @param {number} price
     * @param {string} overview
     */
    constructor(courseID, name, path, about, price, overview) {
        if (!name || typeof name !== 'string' || name.length > 255) throw new Error("Invalid course name");
        if (path && typeof path !== 'string') throw new Error("Invalid course path");
        if (about && typeof about !== 'string') throw new Error("Invalid course description");
        if (typeof price !== 'number' || price <= 0) throw new Error("Invalid course price");
        if (overview && typeof overview !== 'string') throw new Error("Invalid course overview");

        this.courseID = courseID;
        this.name = name;
        this.path = path;
        this.about = about;
        this.price = price;
        this.overview = overview;
    }

    toJSON() {
        return {
            courseID: this.courseID,
            name: this.name,
            path: this.path,
            about: this.about,
            price: this.price,
            overview: this.overview
        };
    }
}

export default Course;
