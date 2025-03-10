export const movieServiceSpy = jasmine.createSpyObj('MovieService', [
  'getMovies',
  'save',
  'delete',
]);
