import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-logintestcomponent',
  templateUrl: './logintestcomponent.component.html',
  styleUrl: './logintestcomponent.component.css'
})
export class LogintestcomponentComponent {
  formData = {
    uname: '',
    password: ''
  };
  data:any

  constructor(private dataService: DataService,private router:Router) { }

  onSubmit() {
    this.dataService.sendFormData(this.formData).subscribe(response => {
      this.data=response
      console.log(this.data)
      if (this.data.message=='Correct'){
        this.router.navigate(['/sucess']);
      }
    });
  }

}
