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
        text: "Eu sou lindo(a) e esperto(a)"
      },
      Contact: {
        title: "Contato",
        text: "4002-8922"
      },
      Portfolio: {
        title: "Portfólio",
        text: "https://github.com/tainacmaia"
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
              title: "Funerária Santa Luzia | dez 2018 - maio 2019",
              content: "Responsável pelos cuidados do corpo pós-falecimento a fim de conservar, embalsamar, higienizar, restaurar e cuidar da aparência de modo a prepará-lo para o velório, funeral ou cerimônia fúnebre de acordo com os devidos preceitos religiosos e legais.n"
            },
          },
          {
            value: {
              title: "Instituto Médico Legal de São Paulo | jan 2020 - jun 2021",
              content: "Técnica em necropsia - Responsável por identificar cadáveres, participar ativamente da dissecação do corpo, catalogar e examinar órgãos, realizar os procedimentos de esterilização do ambiente bem como dos instrumentos utilizados na autópsia."
            },
          },
          {
            value: {
              title: "Vidente autônoma | jul 2021 - atual",
              content: "Atualmente opero no ramo do paranormal como vidente auxiliada por meus antepassados a fim de ajudar questões pessoais minhas ou de clientes, emito nota fiscal."
            },
          }
        ],
        isActive: false
      },

      education: {
        array: [
          {
            value: {
              title: "Escola 9: Nevermore | 2022 - atual",
              content: "Escola onde meus pais estudaram e, contra todas as expectativas, fiz amigos."
            },
          },
          {
            value: {
              title: "Escola 8: Nancy Reagan High | 2022 - 2022 (expulsão)",
              content: "Escola de playboyzinhos mimados, se você precisar treinar com alvos vivos, recomendo."
            },
          },
          {
            value: {
              title: "Escolas 1, 2, 3, 4, 5, 6, 7 | 2017 a 2022 (expulsão)",
              content: "Irrelevantes."
            },
          },
          {
            value: {
              title: "Curso de abertura de cadáveres | 2021",
              content: "Um dos melhores presentes de aniversário que eu poderia querer."
            },
          }
        ],
        isActive: false
      },

      achievements: {
        array: [
          {
            value: {
              title: "Ferir gravemente alunos do ensino médio em Nancy Reagan High",
              content: "Método: Piranhas. Como método punitivo à aluno que torturou Feioso (seu irmão), piranhas foram jogadas na piscina do colégio onde o culpado e seus amigos praticavam esportes."
            },
          },
          {
            value: {
              title: "Provar a inocência de um acusado de homicídio (assassino)",
              content: "Método: Investigação. A fim de inocentar Gomez Addams, inicia-se uma investigação ao passado e dessa maneira é descoberta um estratagema de envenenamento em massa aos excluídos da escola Nevermore pela suposta vítima, que coincidentemente, em um embate com o acusado acaba por quebrar um frasco de Belladonna e se auto envenenar."
            },
          },
          {
            value: {
              title: "Torneio de Canoagem",
              content: "Método: Emboscadas e conhecimento do oponente. Após conhecer seus oponentes em competições onde “vale tudo”, é importante estar a frente e se preparar para possíveis emboscadas preparadas para te atingir e assim formar uma frente de defesa. Simultaneamente preparar sua estratégia de ataque."
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
