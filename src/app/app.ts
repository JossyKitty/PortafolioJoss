import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, IHeaderLink, ScrollToTop } from 'josslib';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ScrollToTop],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  pages:IHeaderLink[] = [
    {
      label: "Inicio",
      link: "/"
    },
    {
      label: "Acerca de mí",
      link: "/acerca-de"
    },
    {
      label: "Portafolio",
      link: "/portafolio"
    },
    {
      label: "Contacto",
      link: "/contacto"
    }
  ]
}
