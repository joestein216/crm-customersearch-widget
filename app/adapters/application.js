import { computed } from '@ember/object';
import DS from 'ember-data';
import { inject as service } from '@ember/service';

export default DS.JSONAPIAdapter.extend({
  currentToken: service(),
  namespace: 'v5/crm',
  headers: computed('currentToken.token', function() {
    return {
      'ACCEPT': 'application/vnd.api+json',
      'Authorization': `Bearer ${this.get('currentToken.token')}`,
      'Content-Type': 'application/vnd.api+json',
      'Ocp-Apim-Subscription-Key': 'deb4a3fc8e374bf9ac33eb991daa9857'
    };
  }),
  host: 'https://api-dev.booker.ninja',
  shouldBackgroundReloadRecord: function(/* store, snapshot */) {
    return false;
  }
});
