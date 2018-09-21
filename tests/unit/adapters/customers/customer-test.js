import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Adapter | customers/customer', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let adapter = this.owner.lookup('adapter:customers/customer');
    assert.ok(adapter);
  });
});
