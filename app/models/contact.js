import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr("string"),
  email: DS.attr("string"),
  players: DS.hasMany('player')
});
