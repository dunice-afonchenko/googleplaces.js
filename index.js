var PlaceSearch = require("./lib/PlaceSearch.js");
var TextSearch = require("./lib/TextSearch.js");
var PlaceDetailsRequest = require("./lib/PlaceDetailsRequest.js");
var RadarSearch = require("./lib/RadarSearch.js");

module.exports = function (apiKey, outputFormat) {
  return {
    placeSearch:new PlaceSearch(apiKey, outputFormat),
    radarSearch:new RadarSearch(apiKey, outputFormat),
    textSearch:new TextSearch(apiKey, outputFormat),
    placeDetailsRequest:new PlaceDetailsRequest(apiKey, outputFormat)
  };
};

