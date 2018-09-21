import { computed } from '@ember/object';
import Service from '@ember/service';

export default Service.extend({
  _token: null,
  setToken(token) {
    this.set('_token', token);
  },
  token: computed('_token', function() {
    return this.get('_token');
  }),
});
