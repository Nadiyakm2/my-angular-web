import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./ui/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-web';
}
