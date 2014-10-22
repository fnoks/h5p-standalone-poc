var H5P = H5P || {};

H5P.DemoLib = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
    // Extend defaults with provided options
    this.options = options;
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    var self = this;
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-greetingcard");

    // Add greeting text.
    $container.append('<div class="greeting-text">' + this.options.text + '</div>');
    
    setTimeout(function () {
      self.$.trigger('resize');
    }, 1);
  };

  return C;
})(H5P.jQuery);
