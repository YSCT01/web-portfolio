import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

import {faWhatsappSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faGithubSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public menuOpen:String;
  faWhatsapp = faWhatsappSquare;
  faFacebook = faFacebookSquare;
  faLinkedIn=faLinkedin;
  faTwitter = faTwitterSquare;
  faInstagram = faInstagramSquare;
  faGithub = faGithubSquare;


  constructor(
  ) { }

  ngOnInit(): void {
    
  }

}
