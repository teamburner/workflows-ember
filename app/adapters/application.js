import DS from "ember-data";

export default DS.RESTAdapter.reopen({
  namespace: "api",
  suffix: '.json',

  pathForType: function(type) {
    return this._super(type) + this.get('suffix');
  }
});
