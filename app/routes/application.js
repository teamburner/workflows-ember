/*global Ember */
/*global $ */

export default Ember.Route.extend({
  setupController: function(controller) {
    // `controller` is the instance of ApplicationController
    $(document).attr('title', "Hello world!");
  }
});
