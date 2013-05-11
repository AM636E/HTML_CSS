var DrugMaker = ( function ( )
{
	var drugElement;
	var mouseOffset;

	function CalculateMouseOffset( event )
	{	
		mouseOffset =
		{
			x: event.screenX - drugElement.offsetLeft,
			y: event.screenY - drugElement.offsetTop
		};
	
	}

	function MouseDown( e )
	{
		drugElement = this;	
		
		document.onmousemove = MouseMove;
		document.onmouseup	 = MouseUp;
		
		CalculateMouseOffset( e );
	}
	
	function MouseMove( e )
	{
		drugElement.style.position = 'absolute';
		drugElement.style.left = e.screenX - mouseOffset.x + 'px';
		drugElement.style.top  = e.screenY - mouseOffset.y + 'px';
	}
	
	function MouseUp( e )
	{
		document.onmousemove = null;
		document.onmouseup	 = null;
	}
	
	return public =
	{
	    MakeDraggable: function(element)
		{
			alert( element );
			console.log( elements );
	        element.onmousedown = MouseDown;
	    }
	}
})();


