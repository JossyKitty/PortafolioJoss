import { Component } from '@angular/core';
import { ISectionHeader, SectionScroller } from 'josslib';

@Component({
  selector: 'app-acerca-de',
  imports: [SectionScroller],
  templateUrl: './acerca-de.html',
  styleUrl: './acerca-de.scss',
})
export class AcercaDe {
  tabs: ISectionHeader[] = [
    {
      label: 'Estudios',
      itemID: 'estudios',
      imgSrc: ['ico_estudios.webp'],
    },
    {
      label: 'Trabajo',
      itemID: 'trabajo',
      imgSrc: ['ico_trabajo.webp'],
    },
    {
      label: 'Habilidades',
      itemID: 'habilidades',
      imgSrc: ['ico_habilidades.webp'],
    },
    {
      label: 'CV',
      itemID: 'CV',
      imgSrc: ['ico_cv.webp'],
    },
  ];
}
