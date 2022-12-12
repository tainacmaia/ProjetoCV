import { AppData } from './models/app-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjetoCV';

  public data: AppData = {
    profileInfo: {
      img: "../assets/profile-picture.jpeg",
      name: "Krebinho",
      About: {
        title: "Sobre mim",
        text: "Eu sou lindo(a) e esperto(a)"
      },
      Contact: {
        title: "Contato",
        text: "4002-8922"
      },
      Portfolio: {
        title: "Portfólio",
        text: "Aqui ta os treco que eu fiz"
      }
    },
    nav: {
      skills: "Skills",
      experience: "Experiências",
      education: "Formação",
      achievements: "Conquistas",
    },
    card: {
      skills: {
        value: "skills",
        isActive: true
      },
      experience: {
        value: "experience",
        isActive: false
      },
      education: {
        value: "education",
        isActive: false
      },
      achievements: {
        value: "achievements",
        isActive: false
      }
    }
  }
}
