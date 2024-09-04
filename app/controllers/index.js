import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


export default class IndexController extends Controller {
  @tracked searchTerm = '';
  @tracked filteredMovies = this.model;     // filteredMovies siempre va a tener las movies que se muestran en la pantalla
  @service router;
  
  @tracked yearFrom = 0;
  @tracked yearTo = 2025;

  @tracked ratingFrom = 0;
  @tracked ratingTo = 5;

  @action
  updateSearchTerm(event) {
    this.searchTerm = event.target.value;

    this.filteredMovies = this.model.filter((movie) =>
      movie.title.toLowerCase().includes(this.searchTerm.toLowerCase()),
    );
  }

  @action
  updateYearTo(event) {
    this.yearTo = event.target.value;

    this.filteredMovies = this.model.filter((movie) => movie.year <= this.yearTo).sort((a, b) => {
      const itemA = a.year;
      const itemB = b.year;

      if (itemA < itemB) {
        return 1;
      }
      if (itemA > itemB) {
        return -1;
      }
      return 0;
    });
  }

  @action
  updateYearFrom(event) {
    this.yearFrom = event.target.value;

    this.filteredMovies = this.model.filter((movie) => movie.year >= this.yearFrom).sort((a, b) => {
      const itemA = a.year;
      const itemB = b.year;

      if (itemA < itemB) {
        return 1;
      }
      if (itemA > itemB) {
        return -1;
      }
      return 0;
    });
  }

  @action
  updateRatingTo(event) {
    this.ratingTo = event.target.value;

    this.filteredMovies = this.model.filter((movie) => movie.rating <= this.ratingTo).sort((a, b) => {
      const itemA = a.rating;
      const itemB = b.rating;

      if (itemA < itemB) {
        return 1;
      }
      if (itemA > itemB) {
        return -1;
      }
      return 0;
    });
  }

  @action
  updateRatingFrom(event) {
    this.ratingFrom = event.target.value;

    this.filteredMovies = this.model.filter((movie) => movie.rating >= this.ratingFrom).sort((a, b) => {
      const itemA = a.rating;
      const itemB = b.rating;

      if (itemA < itemB) {
        return 1;
      }
      if (itemA > itemB) {
        return -1;
      }
      return 0;
    });
  }

  @action
  addMovie() {
    this.router.transitionTo('newMovie');
  }

  @action
  sortBy(property) {
    if (property === "title") {
      this.filteredMovies = this.model.sort((a, b) => {
        const titleA = a.title.toUpperCase();
        const titleB = b.title.toUpperCase();

        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0;
      });
    } else {
      const filter = property === "year" ? "year" : "rating";
      console.log(filter);
      this.filteredMovies = this.model.sort((a, b) => {
        const itemA = property === "year" ? a.year : a.rating;
        const itemB = property === "year" ? b.year : b.rating;

        if (itemA < itemB) {
          return 1;
        }
        if (itemA > itemB) {
          return -1;
        }
        return 0;
      });
    }
  }
}
