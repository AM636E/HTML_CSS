function moveElement( element, pixelCount )
{
	var currPos = element.offsetLeft;
	var newPos = currPos + pixelCount ;
	
	if( newPos < 0 || newPos - element.offsetWidth > element.offsetWidth )
	{
		return;
	}
	
	var bgPosX = ( newPos / element.offsetWidth ) * 100;	
	element.style.left = newPos + 'px';
	element.style.backgroundPositionX = bgPosX / 2.15+'%';
}
