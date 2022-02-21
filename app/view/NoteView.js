class NoteView {

    constructor(element) {
        this._element = element;

    }

    _template(list) {
       
        return list.map((element)=> {
 
            return `
                <div class="notesView" >
                    <textarea rows="1" class="inputTitle" id="title">${element.note._noteTitle}</textarea>
                    <textarea rows="6" class=" inputContent" id="content">${element.note._noteContent}</textarea>
                    <button class="noteButtonEdit" onclick="noteController._editNote(${element.key})">Edit</button>
                    <button class="noteButtonRemove" onclick="noteController._removeNote(${element.key})">Delete</button>
                </div>
            `}).join(``);

    }
    update(list) {
 
        this._element.innerHTML = this._template(list);
    }



}