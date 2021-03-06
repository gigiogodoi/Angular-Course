import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  menus: MenuItem[] = 
  [
    { link: '/home'     , name: 'Home'     , exact: true  , admin: false },
    { link: '/cadastro' , name: 'Cadastro' , exact: true  , admin: false },
    { link: '/sobre'    , name: 'Sobre'    , exact: true  , admin: false },
    { link: '/produtos' , name: 'Produtos' , exact: false , admin: false },
    { link: '/admin'    , name: 'Admin'    , exact: false , admin: true  },
  ];
}

export interface MenuItem {
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}