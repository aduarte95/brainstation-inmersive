import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
    /*`template: <div>
    <h1> {{ title }} </h1>
    </div>`*/
    // Comillas son para hacer varias lineas. com '' solo una linea.
})

// export para ser usado en otros lados.
export class AppComponent {
 title = 'Test';
}