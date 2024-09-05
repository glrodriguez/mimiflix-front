import Component from '@glimmer/component';
import { action } from '@ember/object';


export default class FiltersComponent extends Component {
  @action
  updateFilter(filterType) {
    this.args.updateMoviesByFilter(filterType);
  }
}
