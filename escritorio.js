$(function() {
    // set effect from select menu value
    $( "#buttonStart" ).click(function() {
   $( "#effect" ).toggle( "slide", 500 );
   $( "#effect1" ).toggle( "slide", 600 );
   $( "#effect2" ).toggle( "slide", 700 );
   $( "#effect3" ).toggle( "slide", 800 );
    });
  });
 $(function() {
$( "#sortable" ).sortable();
$( "#sortable" ).disableSelection();
  $( "#draggable6" ).draggable();
  $( "#draggable1" ).draggable();
  $( "#draggable2" ).draggable();
  $( "#draggable3" ).draggable();
  $( "#draggable4" ).draggable();
  $( "#draggable7" ).draggable();
  $( "#draggable5" ).draggable();
  $( "#draggable8" ).draggable();
  $( "#draggable9" ).draggable();
  $( "#draggable10" ).draggable();
});
 $("#Resultado").val("Buscar...");