import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user: User = {
    name: '',
    lastName: '',
    phone: '',
    address: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getUserById(id).subscribe((data) => {
      this.user = data;
    });
  }

  updateUser(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.updateUser(id, this.user).subscribe({
      next: (response) => {
        console.log('Usuario actualizado con éxito:', response);
        // Redirigir a la lista de usuarios o mostrar un mensaje de éxito
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al actualizar el usuario:', error);
        // Manejar el error aquí
      }
    });
  }

}
