$(document).ready(function () {
  $(".next").click(function () {
    const current_img = $(".show");
    const next_img = current_img.next();

    if (next_img.length) {
      current_img.fadeOut('fast').removeClass("show");
      next_img.fadeIn('fast').addClass("show");
    }
  });

  $(".prev").click(function () {
    const current_img = $(".show");
    const prev_img = current_img.prev();

    if (prev_img.length) {
      current_img.fadeOut('fast').removeClass("show");
      prev_img.fadeIn('fast').addClass("show");
    }
  });
});
