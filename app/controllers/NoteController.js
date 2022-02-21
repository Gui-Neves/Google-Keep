class NoteController {

    constructor() {
        this._title = document.querySelector("#title");
        this._title.focus();
        this._content = document.querySelector("#content");
        this._noteList = new NoteList();
        this._noteView = new NoteView(document.querySelector(".viewContainer"), this._noteList);
        Indexeddb.getConnection()
            .then(connection => new NoteDao(connection).showNotes()
                .then((myNotes) => {
                    this._noteView.update(myNotes);
                })
                .catch(e => console.log(e)))
            .catch(e => console.log(e));
    }
    _addNote(event) {
        event.preventDefault();

        let note = new Note(this._title.value, this._content.value);
        Indexeddb.getConnection()
            .then(connection => new NoteDao(connection).addNote(note)
                .then(response => console.log(response))
                .catch(response => console.log(response)))
            .catch(response => console.log(response));

        Indexeddb.getConnection()
            .then(connection => new NoteDao(connection).showNotes()
                .then((myNotes) => {
                    this._noteView.update(myNotes);
                })
                .catch(e => console.log(e)))
            .catch(e => console.log(e));


        this._cleanForm();
    }
    _removeNote(index) {
        console.log(index);
        Indexeddb.getConnection()
            .then(connection => new NoteDao(connection).removeNote(index)
                .then((response) => {
                    console.log(response);
                })
                .catch(response => console.log(response)))
            .catch(response => console.log(response));

        Indexeddb.getConnection()
            .then(connection => new NoteDao(connection).showNotes()
                .then((myNotes) => {                   
                    this._noteView.update(myNotes);               
                })
                .catch(e => console.log(e)))
            .catch(e => console.log(e));

    }
    _cleanForm() {
        this._title.value = "";
        this._content.value = "";
        this._title.focus();
    }


}