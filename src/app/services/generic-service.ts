import {HttpClient} from "@angular/common/http";
import {environment} from "@env/environment";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

export class GenericService {
    // T is a generic type
    T: any;

    // baseUrl is the url of the backend
    baseUrl: string = environment.apiUrl;

    // resourceUrl is the url of the resource
    resourceUrl: string= '';

    constructor(public http: HttpClient, T: any, resourcePrefix: string) {
        this.T = T;
        this.resourceUrl = this.baseUrl +'/'+ resourcePrefix;
    }

    /**
     * Get all objects
     * return an array of objects of type T
     */
    getAll() {
        return this.http.get<typeof this.T>(this.resourceUrl)
            .pipe(
                catchError(this.handleError<typeof this.T>('getAll', []))
            );
    }

    /**
     * Get one object by id
     * @param id
     */
    getOne(id: number) {
        return this.http.get<typeof this.T>(this.resourceUrl + '/' + id)
            .pipe(
                catchError(this.handleError<typeof this.T>('getOne'))
            );
    }

    /**
     * Create an object
     * @param t
     */
    create(t: typeof this.T) {
        return this.http.post<typeof this.T>(this.resourceUrl, t)
            .pipe(
                catchError(this.handleError<typeof this.T>('create'))
            );
    }

    /**
     * Update an object
     * @param t
     */
    update(t: typeof this.T) {
        return this.http.put<typeof this.T>(this.resourceUrl, t)
            .pipe(
                catchError(this.handleError<typeof this.T>('update'))
            );
    }

    /**
     * Delete an object by id
     * @param id
     */
    delete(id: number) {
        return this.http.delete(this.resourceUrl + '/' + id)
            .pipe(
                catchError(this.handleError<typeof this.T>('delete'))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    handleError<T>(operation = 'operation', result?: typeof this.T) {
        return (error: any): Observable<typeof this.T> => {
            let errorMessage ;
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            }
            else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            console.log({
                url: this.resourceUrl,
                operation: operation,
                errorMessage: errorMessage
            });

            return of(result as typeof this.T)

        }

    }


}