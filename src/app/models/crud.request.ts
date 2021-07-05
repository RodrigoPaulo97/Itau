import { Observable } from "rxjs";

export interface RequestCRUD<T> {
    get(): Observable<T[]>
    getID(id: string | number): Observable<T>
    insert(register: T): Observable<T>;
    edit(register: T): Observable<T>;
    delete(id: string): Observable<T>;
}