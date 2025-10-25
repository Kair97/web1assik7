$(document).ready(function() {
  console.log("jQuery is ready!");

  // ===== Part 1: Selectors =====
  $("#title").text("Changed Title using jQuery");
  $(".text").html("<b>Updated paragraph with bold text!</b>");
  $("div").css("color", "blue");

  // ===== Part 2: Effects =====
  // Task 2: Hide / Show / Toggle
  $("#hide").click(function() {
    $("#para").hide();
  });
  $("#show").click(function() {
    $("#para").show();
  });
  $("#toggle").click(function() {
    $("#para").toggle();
  });

  // Task 3: Fade methods
  $("#fadeIn").click(function() {
    $("#myImage").fadeIn(1000);
  });
  $("#fadeOut").click(function() {
    $("#myImage").fadeOut(1000);
  });
  $("#fadeToggle").click(function() {
    $("#myImage").fadeToggle(1000);
  });

  // Task 4: Slide methods
  $("#slideToggle").click(function() {
    $("#panel").slideToggle("slow");
  });

  // ===== Part 3: DOM Manipulation =====
  // Task 5: Add & Remove Elements
  $("#add").click(function() {
    $("#list").append("<li>New Item</li>");
  });
  $("#remove").click(function() {
    $("#list li:last").remove();
  });

  // Task 6: Modifying Attributes
  $("#changeImg").click(function() {
    $("#switchImage").attr("src", "https://via.placeholder.com/200/ff0000");
  });
  $("#changeLink").click(function() {
    $("#myLink").attr("href", "https://astanait.edu.kz").text("Go to AITU");
  });

  // Task 7: Form Interaction
  $("#nameInput").keyup(function() {
    $("#displayName").text("Name: " + $(this).val());
  });
  $("#emailInput").keyup(function() {
    $("#displayEmail").text("Email: " + $(this).val());
  });

  // ===== Part 4: Animations =====
  // Task 8: Basic animation
  $("#animate").click(function() {
    $("#box").animate({ left: '200px', width: '200px', height: '200px' }, 1000);
  });

  // Task 9: Sequential animations
  $("#sequence").click(function() {
    $("#box")
      .animate({ left: '200px' }, 800)
      .animate({ top: '200px' }, 800)
      .animate({ width: '50px', height: '50px' }, 800)
      .animate({ left: '0', top: '0', width: '100px', height: '100px' }, 800);
  });

  // Task 10: Combined animation
  $("#combo").click(function() {
    $("#box").animate({
      left: '150px',
      opacity: 0.5,
      width: '150px',
      height: '150px'
    }, 1000);
  });

  // ===== Part 5: Mini Project =====
  $(".thumb").click(function() {
    let newSrc = $(this).attr("src");
    $("#mainImage").fadeOut(300, function() {
      $(this).attr("src", newSrc).fadeIn(300);
    });
  });
});