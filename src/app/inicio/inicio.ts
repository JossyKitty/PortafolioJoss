import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { concatMap, endWith, from, map, timer } from 'rxjs';

export interface ISimulatedConsoleText {
  text: string;
  manualWriting?: boolean;
  delay?: boolean;
}

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss',
})
export class Inicio implements AfterViewInit {
  @ViewChild('console') consoleRef: ElementRef<HTMLDivElement> | undefined;

  constructor(private cdr: ChangeDetectorRef) {}

  consoleTexts: ISimulatedConsoleText[] = [
    {
      text: 'ng new frontend-developer',
      manualWriting: true,
    },
    {
      text: '✔ Which stylesheet system would you like to use?',
    },
    {
      text: 'Sass (SCSS)',
      manualWriting: true,
    },
    {
      text: '✔ Which AI tools do you want to configure with Angular best practices?',
    },
    {
      text: 'None',
      manualWriting: true,
    },
    { text: 'CREATE test-install/.prettierrc (161 bytes)' },
    { text: 'CREATE frontend-developer/README.md (1465 bytes)' },
    { text: 'CREATE frontend-developer/.editorconfig (314 bytes)' },
    { text: 'CREATE frontend-developer/.gitignore (622 bytes)' },
    { text: 'CREATE frontend-developer/angular.json (2051 bytes)' },
    { text: 'CREATE frontend-developer/package.json (790 bytes)' },
    { text: 'CREATE frontend-developer/tsconfig.json (957 bytes)' },
    { text: 'CREATE frontend-developer/tsconfig.app.json (429 bytes)' },
    { text: 'CREATE frontend-developer/tsconfig.spec.json (441 bytes)' },
    { text: 'CREATE frontend-developer/.vscode/extensions.json (130 bytes)' },
    { text: 'CREATE frontend-developer/.vscode/launch.json (470 bytes)' },
    { text: 'CREATE frontend-developer/.vscode/mcp.json (179 bytes)' },
    { text: 'CREATE frontend-developer/.vscode/tasks.json (978 bytes)' },
    { text: 'CREATE frontend-developer/src/main.ts (222 bytes)' },
    { text: 'CREATE frontend-developer/src/index.html (297 bytes)' },
    { text: 'CREATE frontend-developer/src/styles.scss (80 bytes)' },
    { text: 'CREATE frontend-developer/src/app/app.scss (0 bytes)' },
    { text: 'CREATE frontend-developer/src/app/app.spec.ts (679 bytes)' },
    { text: 'CREATE frontend-developer/src/app/app.ts (295 bytes)' },
    { text: 'CREATE frontend-developer/src/app/app.html (20144 bytes)' },
    { text: 'CREATE frontend-developer/src/app/app.config.ts (313 bytes)' },
    { text: 'CREATE frontend-developer/src/app/app.routes.ts (77 bytes)' },
    { text: 'CREATE frontend-developer/public/favicon.ico (15086 bytes)' },
    { text: '⠦ Installing packages (npm)...', delay: true },
    { text: '✔ Packages installed successfully.' },
    { text: 'cd frontend-developer', manualWriting: true },
    { text: 'npm install UX', manualWriting: true },
    { text: '⠦ Installing packages (npm)...', delay: true },
    { text: '✔ Packages installed successfully.' },
    { text: 'npm install Kittens', manualWriting: true },
    { text: '⠦ Installing packages (npm)...', delay: true },
    { text: '✔ Packages installed successfully.' },
    { text: 'npm install DevelopmentKit --save-dev', manualWriting: true },
    { text: '⠦ Installing packages (npm)...', delay: true },
    { text: '✔ Packages installed successfully.' },
    { text: 'ng serve', manualWriting: true },
    {
      text:
        'Application bundle generation complete. [2.493 seconds] - ' +
        new Date(Date.now()).toISOString(),
    },
  ];

  ngAfterViewInit(): void {
    this.generateNextLine(0);
  }

  generateNextLine(index: number) {
    if (this.consoleRef && index < this.consoleTexts.length) {
      const line = this.consoleTexts[index];
      const codeElement = document.createElement('code');
      codeElement.className = 'banner__command';
      this.consoleRef.nativeElement.appendChild(codeElement);

      requestAnimationFrame(() => {
        this.consoleRef!.nativeElement.scrollTop = this.consoleRef!.nativeElement.scrollHeight;
      });
      if (line.delay || line.manualWriting) {
        if (line.delay) {
          const delay = 1000 * Math.random();
          codeElement.textContent = line.text;
          setTimeout(() => {
            this.generateNextLine(++index);
          }, delay);
        }
        if (line.manualWriting) {
          line.text = '$ ' + line.text;
          from([...line.text])
            .pipe(
              concatMap((char) => timer(50).pipe(map(() => char))),
              endWith(null),
            )
            .subscribe((char) => {
              if (char !== null) {
                codeElement.textContent = codeElement.textContent + char;
              } else {
                this.generateNextLine(++index);
              }
            });
        }
      } else {
        codeElement.textContent = line.text;
        this.generateNextLine(++index);
      }
    }
  }
}
