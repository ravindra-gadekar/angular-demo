import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-project';

  constructor(
    private toastrService: ToastrService
    
    ){  }

    showTostr(){
      this.toastrService.warning("Message", "Titile");
    }
}
