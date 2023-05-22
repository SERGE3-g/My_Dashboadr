import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isSidebarOpen: boolean = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  searchSidebar(): void {
    const sidebar = document.querySelector('.sidebar') as HTMLElement;
    const closeBtn = document.querySelector('#btn') as HTMLElement;

    sidebar.classList.toggle('open');
    this.menuBtnChange(sidebar, closeBtn);
  }

  menuBtnChange(sidebar: HTMLElement, closeBtn: HTMLElement): void {
    if (sidebar.classList.contains('open')) {
      closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
    } else {
      closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
    }
  }



  closeSidebar(): void {
    this.isSidebarOpen = false;
  }
}
