import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentToken: service(),
  actions: {
    setToken(token) {
      this.get('currentToken').setToken(token);
    }
  }
});
