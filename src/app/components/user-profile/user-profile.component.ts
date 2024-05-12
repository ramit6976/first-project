import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {

  users=[
    {name:"sumit",isSingle:true,salary:"10000"},
    {name:"punit",isSingle:false,salary:"60000"},
    {name:"bunit",isSingle:true,salary:"90000"},
  ]

}
