class Note {

    constructor(title, content) {
        this._noteTitle = title;
        this._noteContent = content;
    }

    get noteTitle() {
        return this._noteTitle;
    }
    get noteContent() {
        return this._noteContent;

    }
    set noteTitle(newTitle) {
        this._noteTitle = newTitle;
    }
    set noteContent(newContent) {
        this._noteContent = newContent;
    }




}