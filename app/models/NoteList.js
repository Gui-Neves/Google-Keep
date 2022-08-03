class NoteList {

    constructor() {
        this._list = [];
    }


    addNote(note) {
        console.log(note);
        this._list.push(note);
    }
    
    remove(index){
        this._list[index] = null;
    }
    
    get list() {
        return this._list;
    }
}