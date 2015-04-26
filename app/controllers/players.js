import Ember from "ember";

export default Ember.ArrayController.extend({
  propertiesToSortBy: ['id:desc', 'name'],
  sortedPlayers: Ember.computed.sort('content', 'propertiesToSortBy'),

  actions: {
    addPlayer: function() {
      var name = this.get('newPlayerName');

      if( !name ){ return false; }
      if( !name.trim() ){ return; }

      var player = this.store.createRecord('player', {
        id: Date.now(),
        name: name
      });

      this.set('newPlayerName', "");
      player.save();
    }
  }
});
