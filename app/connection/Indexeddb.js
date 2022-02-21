class Indexeddb {


     static  getConnection() {   

        return new Promise((resolve, reject)=>{

            let openRequest = window.indexedDB.open('notes', 1);

            openRequest.onupgradeneeded = e => {
                
                let stores = e.target.result;
                if (stores.objectStoreNames.contains('myNotes')) {
                    stores.deleteObjectStore('myNotes');
                    console.log("upgrade");
                }
                console.log("criando...");
                stores.createObjectStore('myNotes', { autoIncrement: true });
            }

            openRequest.onsuccess = e => {
                
                resolve(e.target.result);
            }
            openRequest.onerror = e => {
                
                reject("Can't open IndexedDB");
            }

        });
    }
}







