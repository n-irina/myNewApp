import { Component } from '@angular/core';
import { User } from '../model/User';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  user: User = {
    name : 'Doe',
    firstname: 'John',
    age: 25,
    quote:'',
    photo:'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  displayAge = true;

  showAge(){
     this.displayAge = !this.displayAge;
  }


}
