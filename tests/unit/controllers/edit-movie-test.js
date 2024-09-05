import { module, test } from 'qunit';
import { setupTest } from 'mimiflix-front/tests/helpers';

module('Unit | Controller | edit-movie', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:edit-movie');
    assert.ok(controller);
  });
});
