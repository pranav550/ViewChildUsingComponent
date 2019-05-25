import { ChildComponent } from './child/child.component';
import { Component,  ViewChild } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(ChildComponent)
    private numberComponent: ChildComponent;
    increase() {
       this.numberComponent.increaseByOne();
    }
    decrease() {
       this.numberComponent.decreaseByOne();
    }
}
