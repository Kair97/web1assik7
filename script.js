$(document).ready(function() {
  console.log("jQuery is ready!");

  // Part 1:
  $("#title").text("Changed Title using jQuery");
  $(".text").html("<b>Updated paragraph with bold text!</b>");
  $("div").css("color", "blue");

  // Part 2
  // Task 2
  $("#hide").click(function() {
    $("#para").hide();
  });
  $("#show").click(function() {
    $("#para").show();
  });
  $("#toggle").click(function() {
    $("#para").toggle();
  });

  // Task 3
  $("#fadeIn").click(function() {
    $("#myImage").fadeIn(1000);
  });
  $("#fadeOut").click(function() {
    $("#myImage").fadeOut(1000);
  });
  $("#fadeToggle").click(function() {
    $("#myImage").fadeToggle(1000);
  });

  // Task 4
  $("#slideToggle").click(function() {
    $("#panel").slideToggle("slow");
  });

  // Part 3
  // Task 5
  $("#add").click(function() {
    $("#list").append("<li>New Item</li>");
  });
  $("#remove").click(function() {
    $("#list li:last").remove();
  });

  // Task 6
  $("#changeImg").click(function() {
    $("#switchImage").attr("src", "../assignment7/images/asitu.jpg");
  });
  $("#changeLink").click(function() {
    $("#myLink").attr("href", "https://astanait.edu.kz").text("Go to AITU");
  });

  // Task 7
  $("#nameInput").keyup(function() {
    $("#displayName").text("Name: " + $(this).val());
  });
  $("#emailInput").keyup(function() {
    $("#displayEmail").text("Email: " + $(this).val());
  });

  // Part 4

  // Task 8
  $("#animate").click(function() {
    $("#box").animate({ left: '200px', width: '200px', height: '200px' }, 1000);
  });

  // Task 9
  $("#sequence").click(function() {
    $("#box")
      .animate({ left: '200px' }, 800)
      .animate({ top: '200px' }, 800)
      .animate({ width: '50px', height: '50px' }, 800)
      .animate({ left: '0', top: '0', width: '100px', height: '100px' }, 800);
  });

  // Task 10
  $("#combo").click(function() {
    $("#box").animate({
      left: '150px',
      opacity: 0.5,
      width: '150px',
      height: '150px'
    }, 1000);
  });

  // Part 5
  $(".thumb").click(function() {
    let newSrc = $(this).attr("src");
    $("#mainImage").fadeOut(300, function() {
      $(this).attr("src", newSrc).fadeIn(300);
    });
  });
});