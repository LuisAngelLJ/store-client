import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  currentPage: number = 0;
  pageSize: number = 5;  // Número de usuarios por página
  totalPages: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  // Método para cargar los usuarios en la página actual
  loadUsers(): void {
    this.userService.getUsers(this.currentPage, this.pageSize).subscribe(
      {
        next: (response) => {
        this.users = response.content;  // `content` es la lista de usuarios
        console.log(this.users);
        this.totalPages = response.totalPages;  // Total de páginas
        },
        error: (error) => {
        console.error('Error al obtener los usuarios:', error);
      }
    }
    );
  }

  // Ir a la página anterior
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.loadUsers();
    }
  }

  // Ir a la página siguiente
  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.loadUsers();
    }
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe({
      next: () => {
        console.log('Usuario eliminado con éxito');
        this.loadUsers();  // Recargar la lista después de eliminar
      },
      error: (error) => {
        console.error('Error al eliminar el usuario:', error);
      }
    });
  }


}
