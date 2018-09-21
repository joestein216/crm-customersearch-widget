import DS from 'ember-data';

export default DS.Model.extend({
  customer: DS.hasMany('customer')
});
