import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;

 const lastUpdate = new Date();
  

  likes = 0;
  posts = [
  	{
  		title: 'Damian Lilliard is a monster',
  		content: 'Lilliard definitly end this serie with a killer three pointer at the buzzer on Paul George who described it as a "bad shot..." '
  	},
  	{
  		title: 'The Warriors on the road to swip the rockets',
  		content:'They are 2 victory away from their opponents that claim better decisions from the referees! '
  	},
  	{
  		title: 'Giannis MVP: if not know, when?',
  		content: 'What a global domination from this young beast. Will he have the award this year?'
  	} 
  ];
 

  constructor(){
  	setTimeout(
  		()=>{
  			this.isAuth = true;
  		}, 4000

  	);
  }


}
