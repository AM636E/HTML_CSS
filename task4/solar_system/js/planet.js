var Planet = function ( el, radius, speed )
{
	this.el = el;
	this.radius = radius;
	this.speed = speed * ( Math.PI / 180 );
	this.parent = el.parentNode;
	this.angle = 0;
	
	this.MoveByCircle = function ( )
	{
		var parentX = this.parent;
		var parentY = this.parent;		
		
		var x = this.radius * Math.cos( this.angle );
		var y = this.radius * Math.sin( this.angle );
		
		this.el.style.left = x + 'px';
		this.el.style.top = y + 'px';
		
		this.angle += this.speed;
		//this.radius += 0.1;
		
	//	this.IsApocalipsis( );
	}
	
	this.IsApocalipsis = function( )
	{
		if( this.el.offsetTop > screen.height ||
			this.el.offsetLeft> screen.width 
		)		
		{
		//	alert( "word is fall" );
			return true;
		}
		
		return false;		
	}
}