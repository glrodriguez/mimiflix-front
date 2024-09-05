import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class NewMovieController extends Controller {
  title = '';
  director = '';
  year = '';
  description = '';
  length = '';
  rating = '';
  genres = [
    'Action',
    'Drama',
    'Comedy',
    'Horror',
    'Sci-Fi',
    'Romance',
    'Mystery',
    'Fantasy',
    'War',
    'Adventure',
    'Thriler',
    'Animation',
  ];
  selectedGenres = [];

  @action
  updateProperty(property, event) {
    this.set(property, event.target.value);
  }

  @action
  toggleGenre(genre) {
    if (this.selectedGenres.includes(genre)) {
      this.set(
        'selectedGenres',
        this.selectedGenres.filter((g) => g !== genre),
      );
      this.set('genres', [genre, ...this.genres]);
    } else {
      // Añado el genero
      this.set('selectedGenres', [...this.selectedGenres, genre]);
      this.set(
        'genres',
        this.genres.filter((g) => g !== genre),
      );
    }
  }

  @action
  createMovie(event) {
    event.preventDefault();

    const trimmedTitle = this.title.replace(/\s+/g, ' ').trim();
    const trimmedDirector = this.director.replace(/\s+/g, ' ').trim();
    const trimmedYear = this.year.replace(/\s+/g, ' ').trim();
    const trimmedDescription = this.description.replace(/\s+/g, ' ').trim();
    const trimmedLength = this.length.replace(/\s+/g, ' ').trim();
    const trimmedRating = this.rating.replace(/\s+/g, ' ').trim();

    if (
      trimmedDescription == '' ||
      trimmedDirector == '' ||
      trimmedTitle == '' ||
      trimmedYear == '' ||
      trimmedLength == ''
    ) {
      window.alert('You must complete all * fields');
    } else {
      if (this.selectedGenres.length === 0) {
        window.alert('You must select at least one genre');
      } else {
        // Guardar en la base

        console.log('Pelicula guardada');
      }
    }
  }
}
