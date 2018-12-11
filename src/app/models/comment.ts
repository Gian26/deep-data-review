export class Tag{
  id:any;
  tag:string;
}

export class Comment{
	name:string;
	comment:string;
	tags:Array<Tag>
	constructor(
		name?:string,
		comment?:string,
		tags?:Array<Tag>
	){}
}
