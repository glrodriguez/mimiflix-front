import { module, test } from 'qunit';
import { setupRenderingTest } from 'mimiflix-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | movie', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Movie />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Movie>
        template block text
      </Movie>
    `);

    assert.dom().hasText('template block text');
  });
});
