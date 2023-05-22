import { Component, OnInit } from '@angular/core';
import { employeeData } from './model/employeeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'My_Dashboadr';

    public data: object[] | undefined;

    ngOnInit(): void {
        this.data = employeeData;
    }
}
