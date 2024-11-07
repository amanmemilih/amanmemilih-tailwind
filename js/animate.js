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
