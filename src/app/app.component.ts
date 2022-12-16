import { Languages } from './models/languages-data.model';
import { AppData } from './models/app-data.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public data: AppData = {
    profileInfo: {
      img: "../assets/profile-picture.jpeg",
      name: "Wandinha",
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
        technologies: [
          {
            classe: 'progress-45',
            image: "../assets/css3.logo.png",
            name: "CSS 3"
          },
          {
            classe: 'progress-75',
            image: "../assets/dotnet.logo.png",
            name: "C#"
          },
          {
            classe: 'progress-90',
            image: "../assets/java.logo.png",
            name: "Java"
          },
          {
            classe: 'progress-95',
            image: "../assets/angular.logo.png",
            name: "Angular"
          },
        ],
        language: [
          {
            languageName: "Inglês",
            level1: {
              level: "is-complete",
              nameLevel: "Iniciante",
            },
            level2: {
              level: "is-complete",
              nameLevel: "Intermediário",
            },
            level3: {
              level: "is-active",
              nameLevel: "Avançado",
            },
            level4: {
              level: "",
              nameLevel: "Fluente",
            },
          },
          {
            languageName: "Árabe",
            level1: {
              level: "is-complete",
              nameLevel: "Iniciante",
            },
            level2: {
              level: "is-complete",
              nameLevel: "Intermediário",
            },
            level3: {
              level: "is-complete",
              nameLevel: "Avançado",
            },
            level4: {
              level: "is-active",
              nameLevel: "Fluente",
            },
          },

        ],
        isActive: true,
      },
      experience: {
        array: [
          {
            value: {
              title: "Experience",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          },
          {
            value: {
              title: "Experience",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          },
          {
            value: {
              title: "Experience",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          }
        ],
        isActive: false
      },

      education: {
        array: [
          {
            value: {
              title: "Education",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          },
          {
            value: {
              title: "Education",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          },
          {
            value: {
              title: "Education",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          }
        ],
        isActive: false
      },

      achievements: {
        array: [
          {
            value: {
              title: "Achievements",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          },
          {
            value: {
              title: "Achievements",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          },
          {
            value: {
              title: "Achievements",
              content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            },
          }
        ],
        isActive: false
      },
      contact: {
        isActive: false
      }
    }
  }

  // public navButtonFocus(e: any) {
  //   if(e.target.className != 'navButton')
  //   {
  //     e.preventDefault();
  //   }
  // }

  public toggleDarkTheme(): void {
    const main = document.getElementsByTagName("main")[0];
    main.classList.toggle('dark-theme');
  }
}
