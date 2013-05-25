var Planet = function ( el, radius, speed )
{
	this.el = el 						  || Planet.prototype.constructor.el    ;
	this.radius = radius				  || Planet.prototype.constructor.radius;
	this.speed = speed * ( Math.PI / 180 )|| Planet.prototype.constructor.speed ;
	this.parent = el.parentNode			  || Planet.prototype.constructor.parent;
}

Planet.prototype = 
{
	constructor: Planet,
	el 		   : 0,
	radius	   : 0,
	speed	   : 2 * ( Math.PI / 180 ),
	parent	   : 0,
	angle	   : 0,
	elPosition : 0,
	
	MoveByCircle: function ( )
	{
		this.el.style.position = 'absolute';
		var parentX = this.parent;
		var parentY = this.parent;		
		
		var x = this.parent.offsetWidth / 5  + this.radius * Math.cos( this.angle ) ;
		var y = this.parent.offsetHeight / 5 + this.radius * Math.sin( this.angle ) ;
		
		this.el.style.left = x + 'px';
		this.el.style.top = y + 'px';
		
		this.angle += this.speed;
	},
	
	CalculateSpeed: function ( )
	{
		var childs = this.parent.childNodes;
		var i = 0;
		console.log( childs );
		console.log( this.el );
		while( childs[ i ++ ] != this.el )
		{
			
			console.log( i );
		}
			this.elPosition = i;
		return this.speed = ( i ) * ( Math.PI / 180 );
	}
}

