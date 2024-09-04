import EmberRouter from '@ember/routing/router';
import config from 'mimiflix-front/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('movie', { path: '/movies/:movie_id' });
  this.route('newMovie');
});
