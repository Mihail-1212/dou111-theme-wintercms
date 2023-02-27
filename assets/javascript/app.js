require('./bootstrap');

// Load additive ui funcs
$(window).on("load", function() {
  const { navbar } = require("./ui/navbar");
  // const { slider } = require("./ui/slider");
  const { tooltip } = require("./ui/tooltip");

  navbar();
  // slider();
  tooltip();
});
