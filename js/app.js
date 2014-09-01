$(window).on('load', function(){

	/*********************************************************
	*	Despliega el menu cuando estamos en movil
	**********************************************************/
	//El click detecta el click sobre un elemento
	$(".icono_menu").on('click', function(event)
		{
			//Previene que la etiqueta a trate de enviarte a otra página
			event.preventDefault();
			//Detiene todas las acciones de mas que intente realizar la etiqueta a para que solo haga lo que queremos
			event.stopPropagation();
			if($("nav").css("left")=="-350px")
			{
				$("nav").animate({left:0}, 500);
			}
			else
			{
				$("nav").animate({left:-350}, 500);
			}
		}
	);
	/*********************************************************
	*	Aoluciona unos pequeños detalles al mostrar el menu lateral que afectan a la vista de escritorio
	**********************************************************/
	//El resize detecta el movimiento de la ventana, y al hacer esto se ejecuta una función
	$(window).on('resize', function(){
		//El width da el tamaño actual de la pantalla
		if($(window).width()>=900 && $("nav").css('left')=="-350px"){
			//Mueve a la posicion 0 el nav, teniendo en cuenta que tiene position absolute
			$("nav").animate({left:0}, 500);
		}
		else if( $(window).width()<900 && $("nav").css('left')=="0px" ){
			$("nav").animate({left:-350}, 500);
		}
	});

});