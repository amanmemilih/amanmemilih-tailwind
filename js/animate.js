//Hover animation - 1302220001
$(document).ready(function () {
  $(".king").hover(
    function () {
      $(this).animate(
        {
          marginTop: "-10px",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
        },
        300
      );
    },
    function () {
      $(this).animate(
        {
          marginTop: "0px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        },
        300
      );
    }
  );
});

// Highlight animation - 1302223083
$(document).ready(function () {
  $(".highlight").hover(
    //hover state
    function () {
      $(this).css({
        "background-color": "#ffff77",
      });
    },
    //default state
    function () {
      $(this).css({
        "background-color": "",
      });
    }
  );
});

// Toggle Hamburger Button - 1302223047
$(document).ready(function () {
  $("#nav-toggle").click(function () {
    $("#nav-links").toggleClass("hidden"); // Show or hide nav links on small screens
  });
});
