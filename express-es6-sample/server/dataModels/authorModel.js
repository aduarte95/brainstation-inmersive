export default class AuthorModel {
    constructor(id, name, fullName, birthdate, img_url, books){
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.birthdate = birthdate;
        this.img_url = img_url;
        this.books = books;
    }
}
