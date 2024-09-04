import { module, test } from 'qunit';
import { setupTest } from 'mimiflix-front/tests/helpers';

module('Unit | Route | newMovie', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:new-movie');
    assert.ok(route);
  });
});
