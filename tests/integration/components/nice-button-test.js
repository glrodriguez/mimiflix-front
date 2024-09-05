import { module, test } from 'qunit';
import { setupRenderingTest } from 'mimiflix-front/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | nice-button', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<NiceButton />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <NiceButton>
        template block text
      </NiceButton>
    `);

    assert.dom().hasText('template block text');
  });
});
