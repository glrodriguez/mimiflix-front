import Route from '@ember/routing/route';

export default class EditMovieRoute extends Route {
  async model(movie){
    console.log(movie.movie_id);
    return {
      _id: '66be345e0b3655fa1eb3fd9f',
      title: 'The thin red line',
      year: 1998,
      description:
        'Un grupo de soldados contempla de cerca los horrores de la guerra en la batalla de Guadalcanal y luchan por sus vidas.',
      director: 'Terrence Malick',
      length: 170,
      rating: 4.1,
      genres: ['War', 'Drama', 'Adventure'],
      isDeleted: false,
      __v: 0,
    };
  }
}
