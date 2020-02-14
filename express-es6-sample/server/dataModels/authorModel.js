export default class AuthorModel {
    constructor(id, name, fullName, birthDate, deathDate, nationality, imgUrl, books){
        this.id = id;
        this.name = name;
        this.fullName = fullName;
        this.birthDate = birthDate;
        this.deathDate = deathDate;
        this.nationality = nationality;
        this.imgUrl = imgUrl;
        this.books = books;
    }
}
