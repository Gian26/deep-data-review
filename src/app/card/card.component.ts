import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';

import { Comment, Tag } from '../models/comment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

	@Input() nombre;
  	@Output()
  	emisorEvento:EventEmitter<Comment> = new EventEmitter<Comment>();
  
  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

  
	manejadorDeClick(){

		console.log("you've clicked me child");
		let comentario = new Comment();
		comentario.name="Felipe";
		comentario.comment="comment;"

		let tag= new Tag();
		tag.id = 2;
		tag.tag="perrito";

		comentario.tags=[tag,tag];

		console.log(comentario);
		this.emisorEvento.emit(comentario);
	}
}
