import database from '../fire';
import { ref, child, get, set } from 'firebase/database'

const dbRef = ref(database);

class DataService {
    getAll(subtree: string) {
        return get(child(dbRef, subtree));
    }

    create(objectID: string, object: any, path: string) {
        set(ref(database, `${path}/${objectID}`), object);
    } 
}

export default new DataService();