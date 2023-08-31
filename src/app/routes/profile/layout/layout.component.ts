import { Component, OnInit } from '@angular/core';
import { AuthService } from '@core/authentication';
import {Utilisateur} from "../../../models/gestion-utilisateurs/utilisateur";

@Component({
  selector: 'app-profile-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class ProfileLayoutComponent implements OnInit {
  user!: Utilisateur;

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user().subscribe(user => (this.user = user));
  }
}
