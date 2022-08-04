class NoteDao {


    constructor(connection) {
        this._connection = connection;
    }

    addNote(note) {
        return new Promise((resolve, reject) => {

            let addRequest = this._connection.transaction(["myNotes"], "readwrite")
            let store = addRequest.objectStore("myNotes");
            let request = store.add(note);
            request.onsuccess = () =>{ 
                resolve("ADICIONADO");
            };
            request.onerror = () => reject("Erro ao adicionar nota");
        });
    }

    removeNote(index){
        return new Promise((resolve,reject)=>{
            let addRequest = this._connection.transaction(["myNotes"], "readwrite")
            let store = addRequest.objectStore("myNotes");
            let request =store.delete(index);
            request.onsuccess = () =>{
                resolve("Exlcuido");
            }
            request.onerror = () =>{
                reject("erro");
            }
            

        });

    }

    showNotes() {

        return new Promise((resolve, reject) => {
            let storageNotes = []; 
            let addRequest = this._connection.transaction(["myNotes"], "readwrite");
            let store = addRequest.objectStore("myNotes");
            let cursor = store.openCursor();
            
            cursor.onsuccess = function(e) {
                let target = e.target.result;

                if(target !== null){    
                    let result = target.value;
                    let myNote ={ 
                        note: new Note(result._noteTitle, result._noteContent),
                        key : target.key
                    }
                    storageNotes.push(myNote);
                    target.continue();         
                }
                else{   
                    resolve(storageNotes);
                }
                
               
            }
            cursor.onerror = e => {
                reject("Não foi possível abrir o cursor");
            }



        });
    }

    editNote(info) {
        return new Promise((resolve, reject) => {
            let addRequest = this._connection.transaction(["myNotes"], "readwrite")
            let store = addRequest.objectStore("myNotes");

            const req = store.put(info.updatedNote, info.key);
        
            req.onsuccess = () => {
                resolve(console.log('success'));
            }

            req.onerror = () => {
                reject(console.log('error'));
            }
        });
    }
}