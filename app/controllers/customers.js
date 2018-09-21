import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  store: service(),
  actions: {
    searchCustomers(x) {
      return this.get('store').query('customers', {
        filter: {
          fullNameBeginsWith: x
        }
      });
    },
    viewCustomerDetail(selectedCustomer) {
      this.transitionToRoute('customers.customer', selectedCustomer.id);
    }
  }
});
