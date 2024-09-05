import Controller from '@ember/controller';
import {action} from '@ember/object'
import { tracked } from '@glimmer/tracking';

export default class EditMovieController extends Controller {
  
  @tracked title = this.model.title;
  @tracked director = this.model.director;
  @tracked year = this.model.year.toString();
  @tracked description = this.model.description;
  @tracked length = this.model.length.toString();
  @tracked rating = this.model.rating.toString();
  @tracked selectedGenres = this.model.genres;
  genres = ['Action', 'Drama', 'Comedy', 'Horror', 'Sci-Fi', 'Romance', 'Mystery', 'Fantasy', 'War', 'Adventure', 'Thriler', 'Animation'];
  @tracked notSelectedGenres = this.genres.filter(g => !this.selectedGenres.includes(g));
  
  @action
  updateProperty(property, event) {
    let value = event.target.value;
    this.set(property, event.target.value);
  }

  @action
  toggleGenre(genre) {
    console.log(this.selectedGenres);
    console.log(this.notSelectedGenres);
    if (this.selectedGenres.includes(genre)) {
      this.set('selectedGenres', this.selectedGenres.filter(g => g !== genre));
      this.set('notSelectedGenres', [genre, ...this.notSelectedGenres]);
    } else { // Añado el genero
      this.set('selectedGenres', [...this.selectedGenres, genre]);
      this.set('notSelectedGenres', this.notSelectedGenres.filter(g => g !== genre));
    }
  }

  @action
  editMovie(){
    event.preventDefault();

    const trimmedTitle = this.title.replace(/\s+/g, ' ').trim();
    const trimmedDirector = this.director.replace(/\s+/g, ' ').trim();
    const trimmedYear = this.year.replace(/\s+/g, ' ').trim();
    const trimmedDescription = this.description.replace(/\s+/g, ' ').trim();
    const trimmedLength = this.length.replace(/\s+/g, ' ').trim();
    const trimmedRating = this.rating.replace(/\s+/g, ' ').trim();

    const editedMovie = {
      title: trimmedTitle,
      director: trimmedDirector,
      year: trimmedYear,
      description: trimmedDescription,
      length: trimmedLength,
      rating: trimmedRating
    }

    if (trimmedDescription == '' || trimmedDirector == '' || trimmedTitle == '' || trimmedYear == '' || trimmedLength == '' || trimmedRating =='') {
      window.alert("You must complete all * fields");
    } else {
      if (this.selectedGenres.length === 0) {
        window.alert("You must select at least one genre");
      } else {
        
        console.log(`Pelicula editada: `);
        console.log(editedMovie);
      }
    }
  }
}
