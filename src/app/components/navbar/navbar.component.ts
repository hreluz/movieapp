import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  search(form:NgForm) {
    if(!form.valid){
      return;
    }
    this.router.navigate(['/search', form.value.word]);
    form.reset();
  }
}
