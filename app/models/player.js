import DS from "ember-data";

export default DS.Model.extend({
  name: DS.attr("string"),
  contactName: DS.attr("string"),
  contactEmail: DS.attr("string")
});
