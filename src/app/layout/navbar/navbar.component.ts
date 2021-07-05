import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user = {
    img: { background: '' },
    name: '',
    typeUser: ''
  }
  constructor() { }

  ngOnInit(): void {
    this.getInfoUser()
  }
  getInfoUser() {
    this.user = {
      img: { background: "url('assets/perfil.jpg')" },
      name: 'Rodrigo Paulo dos santos',
      typeUser: 'Dev Angular'
    }
  }
  reduceName(name: string) {
    try {
      return name.split(' ', 2).join(' ')
    } catch {
      return name
    }
  }

}
