import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userData: any;
  error: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:3000/api/auth/profile').subscribe({
      next: (res: any) => {
        console.log('✅ Respuesta protegida:', res);
        this.userData = res.user;
      },
      error: (err) => {
        console.error('❌ Error:', err);
        this.error = err.error?.message || 'Error al cargar perfil';
      }
    });
  }
}
