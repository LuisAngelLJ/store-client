import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { User } from 'src/app/shared/models/user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  newUser: User = {
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
  }

  register() {
    // Verifica que el objeto tenga los valores correctamente asignados
    console.log('Datos del usuario que se envían:', this.newUser);

    this.userService.registerUser(this.newUser).subscribe({
      next: (response) => {
        console.log('Usuario registrado con éxito:', response);
        // Puedes redirigir o mostrar un mensaje de éxito
      },
      error: (error) => {
        console.error('Error al registrar el usuario:', error);
        // Manejar el error aquí, por ejemplo, mostrando un mensaje de error
      }
    });
  }
}
