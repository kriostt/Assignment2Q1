$(document).ready(function() {
  $("#draggable").draggable();

  $("#droppable").droppable({
    drop: function(event, ui) {
      $(this).addClass("ui-state-highlight").find("p").html("You dropped something!")
    },
    out: function(event, ui) {
      $(this).removeClass("ui-state-highlight").find("p").html("Drop the draggable object here!")
    }
  });

  $("#resizable").resizable({
    maxHeight: 200,
    maxWidth: 200,
    minWidth: 100,
    minHeight: 100
  });

  $("#selectable").selectable({
    unselected: function(event, ui) {
      $(this).css("background-color", "white")
    }
  });

  $("#accordion").accordion();

  $(function() {
    var colours = [
      "Red",
      "Orange",
      "Yellow",
      "Green",
      "Blue",
      "Purple",
      "Pink",
      "Black",
      "White",
      "Brown"
    ];

    $("#colours").autocomplete({
      source: colours
    });
  });

  $("#date").datepicker();

  $("#slider").slider({
    min: 0,
    max: 100,
    value: 0,
    slide: function(event, ui) {
      $("#slider").prev().css({opacity: ui.value / 100});
      $("#slider").css("background", "linear-gradient(to right, darksalmon "+ui.value+"%, lightgray 0%)");
    }
  });

  $("#show").click(function() {
    $("#showAndHide").show("drop");
  });

  $("#hide").click(function() {
    $("#showAndHide").hide("bounce");
  });


  $("#explode").click(function() {
    $("#explode").effect("explode", function() {
      setTimeout(function() {
        $("#explode").show("pulsate");
      }, 1000);
    });
  });

  $("#fadeIn").click(function() {
    $("#fadeInAndOut").fadeIn(1000);
  });

  $("#fadeOut").click(function() {
    $("#fadeInAndOut").fadeOut(1000);
  });

  $(function() {
    var state = true;
    $("#colourAnimation").click(function() {
      if (state) {
        $("#colourAnimation").animate({
          backgroundColor: "#e9967a",
          color: "white",
          width: 500
        }, 1000);
      } else {
        $("#colourAnimation").animate({
          backgroundColor: "#d3d3d3",
          color: "black",
          width: 200
        }, 1000);
      }
      state = !state;
    });
  });
});