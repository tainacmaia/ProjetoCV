import { Languages } from './models/languages-data.model';
import { AppData } from './models/app-data.model';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Levels } from './constants/language-level.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public data: AppData = {
    profileInfo: {
      img: "../assets/profile-picture.jpeg",
      name: "Wandinha Addams",
      About: {
        title: "Sobre mim",
        text: ["Eu sou lindo(a) e esperto(a)"]
      },
      Contact: {
        title: "Contato",
        text: ["Telefone:", "4002-8922", "E-mail:", "wandinha.addams@email.com"]
      },
      Portfolio: {
        title: "Portfólio",
        text: ["https://github.com/tainacmaia"]
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
            level: Levels.Basico
          },
          {
            languageName: "Árabe",
            level: Levels.Avancado
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

  ngOnInit(): void {
    // console.log(document.getElementsByClassName('languagesList'))
    // this.showLanguages()
  }

  public toggleDarkTheme(): void {
    const main = document.getElementsByTagName("main")[0];
    main.classList.toggle('dark-theme');
  }

  @ViewChild('languages') languages!: ElementRef<HTMLElement>;
  // public showLanguages(): void{
  //   console.log(this.languages)
  //   const section = document.getElementsByClassName('languagesList')

  // }
}
