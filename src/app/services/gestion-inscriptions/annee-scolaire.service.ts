import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AnneeScolaire} from "../../models/gestion-inscriptions/annee-scolaire";
import {environment} from "@env/environment";

@Injectable({
  providedIn: 'root'
})
export class AnneeScolaireService {

  baseUrl = environment.apiUrl + '/anneeScolaires';
  constructor(private http :HttpClient) { }

    getAll() {
        return this.http.get<AnneeScolaire[]>(this.baseUrl)
    }

    getById(id: number) {
        return this.http.get<AnneeScolaire>(this.baseUrl + '/' + id)
    }

    create(anneeScolaire: AnneeScolaire) {
        return this.http.post<AnneeScolaire>(this.baseUrl, anneeScolaire)
    }

    update(anneeScolaire: AnneeScolaire) {
        return this.http.put<AnneeScolaire>(this.baseUrl+ '/' + anneeScolaire.id, anneeScolaire)
    }

    delete(id: number) {
        return this.http.delete(this.baseUrl + '/' + id)
    }
}
