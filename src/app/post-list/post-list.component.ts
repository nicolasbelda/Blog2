import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

	@Input() postTitle : string;
	@Input() postContent : string;
  @Input() postLikes : number;

  lastUpdate = new Date();



  ngOnInit() {
  }

  getContent(){
  	return this.postContent;
  }

  getLikes(){
    return this.postLikes;  
  }

  getColor(){
  	if (this.postLikes > 0){
  		return 'green';
  	} else if(this.postLikes <0) {
  		return 'red';
  	}
  }


  onIncrement(){
  	this.postLikes ++;
  	console.log('incrémenté');
  	console.log(this.getLikes());
  }

  onDecrement(){
  	this.postLikes --;
  	console.log('decrémenté');
    console.log(this.getLikes());
  }
}
