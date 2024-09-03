import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class IndexController extends Controller {
  @tracked searchTerm = '';
  @tracked filteredMovies = this.model;
  @service router;

  @action
  updateSearchTerm(event) {
    this.searchTerm = event.target.value;

    this.filteredMovies = this.model.filter((movie) =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  @action
  addMovie() {
    this.router.transitionTo('newMovie');
  }
}
