/**
 * @author Kishor Patil
 * @email kishor.patil0589@gmail.com
 * @create date 2018-07-09 12:53:39
 * @modify date 2018-07-09 12:53:39
 * @desc [description]
*/
import { Component } from '@angular/core';
import { RootDataService } from './services/root-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  userName = 'User';
  interval = 0;
  isLogin = true;
  xPos = 0;
  yPos = 0;
  constructor(private rootDataService: RootDataService) {
  }

  ngOnInit() {
    this.rootDataService.userName.
      subscribe(userName => this.userName = userName);
  }

  changename(event) {
    this.rootDataService.setName(event.target.value);
  }
}
