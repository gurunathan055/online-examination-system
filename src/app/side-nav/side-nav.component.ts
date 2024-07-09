import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {
  //isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = true;
  showSubSubMenu: boolean = false;
  selectedMenu: string = "dashboard";
  @ViewChild('sidenav') sidenav!: MatSidenav;

  // mouseenter() {
  //   if (!this.isExpanded) {
  //     this.isShowing = true;
  //   }
  // }

  // mouseleave() {
  //   if (!this.isExpanded) {
  //     this.isShowing = false;
  //   }
  // }

  menuSelected(menuName: string){
    this.selectedMenu = menuName;
  }
}
