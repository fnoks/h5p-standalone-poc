// TODO: Would it be easier if h5pintegration.js just hooked into the H5P namespace instead
// of creating its own? This way we wouldn't have lots of "empty" wrapper functions.
var H5PIntegration = H5PIntegration || {};
var H5P = H5P || {};

// Fetch json content. Path is hardcoded for this test,
// but in a real scenario i could not be...
H5P.jQuery.getJSON("workspace/content/content.json", function( data ) {
  jsonContent = JSON.stringify(data);
  H5PIntegration.init();
});

// The following code had to be moved from h5p.js, since we need to load the content.json
// asynchronously. The code is commented out in h5p.js (from line 984)
// --> Start code moved
H5PIntegration.init = function () {
  if (jsonContent !== undefined && !H5P.initialized) {
    H5P.initialized = true;
    H5P.init();
  }
};
H5P.jQuery(document).ready(function () {
  H5PIntegration.init();
});
// <-- End code moved

H5PIntegration.getContentData = function (id) {
  if(jsonContent === undefined) {
    return;
  }

  // Library info is hardcoded for this test
  return {
    library: "H5P.DemoLib 1.0",
    jsonContent: jsonContent,
    fullScreen: "1",
    export: "not-implemented.h5p",
    embedCode: "TBD"
  };
};

H5PIntegration.getJsonContent = function (contentId) {
  return jsonContent;
};

H5PIntegration.getContentPath = function (contentId) {
  // TBD
  return '';
};

/**
 * Get the path to the library
 *
 * TODO: Make this use machineName instead of machineName-majorVersion-minorVersion
 *
 * @param {string} library
 *  The library identifier as string, for instance 'downloadify-1.0'
 * @returns {string} The full path to the library
 */
H5PIntegration.getLibraryPath = function (library) {
  // TBD
  return '';
};

/**
 * Get Fullscreenability setting.
 */
H5PIntegration.getFullscreen = function (contentId) {
  // TBD
  return true;
};

/**
 * Loop trough styles and create a set of tags for head.
 * TODO: Cache base tags or something to improve performance.
 *
 * @param {Array} styles List of stylesheets
 * @returns {String} HTML
 */
H5PIntegration.getHeadTags = function (contentId) {
  // Hardcoded values and paths to come:
  var styles = [
    'lib/css/h5p.css',
    'workspace/H5P.DemoLib/css/demo.css'
  ];

  var scripts = [
    'lib/js/jquery.js',
    'lib/js/h5pintegration.js',
    'lib/js/h5p.js',
    'workspace/H5P.DemoLib/js/demo.js'
  ];

  var createStyleTags = function (styles) {
    var tags = '';
    for (var i = 0; i < styles.length; i++) {
      tags += '<link rel="stylesheet" href="' + styles[i] + '">';
    }
    return tags;
  };

  var createScriptTags = function (scripts) {
    var tags = '';
    for (var i = 0; i < scripts.length; i++) {
      tags += '<script src="' + scripts[i] + '"></script>';
    }
    return tags;
  };

  return createStyleTags(styles)
       + createScriptTags(scripts);
};

/**
 * Define core translations.
 */
H5PIntegration.i18n = {
  H5P: {
    fullscreen: 'Fullscreen',
    download: 'Download',
    copyrights: 'Rights of use',
    embed: 'Embed',
    copyrightInformation: 'Rights of use',
    close: 'Close',
    title: 'Title',
    author: 'Author',
    year: 'Year',
    source: 'Source',
    license: 'License',
    thumbnail: 'Thumbnail',
    noCopyrights: 'No copyright information available for this content.',
    downloadDescription: 'Download this content as a H5P file.',
    copyrightsDescription: 'View copyright information for this content.',
    embedDescription: 'View the embed code for this content.',
    h5pDescription: 'Visit H5P.org to check out more cool content.'
  }
};

/**
 *  Returns an object containing a library metadata
 *
 *  @returns {object} { listData: object containing libraries, listHeaders: array containing table headers (translation done server-side) }
 */
H5PIntegration.getLibraryList = function () {
  // Don't need this
};

/**
 *  Returns an object containing detailed info for a library
 *
 *  @returns {object} { info: object containing libraryinfo, content: array containing content info, translations: an object containing key/value }
 */
H5PIntegration.getLibraryInfo = function () {
  // Don't need this
};

/**
 * Get the DOM element where the admin UI should be rendered
 *
 * @returns {jQuery object} The jquery object where the admin UI should be rendered
 */
H5PIntegration.getAdminContainer = function () {
  // Don't need this
};
