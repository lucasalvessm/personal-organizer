import { MovieService } from '../../movies/services/movie.service-store';

export const movieServiceSpy = (): jasmine.SpyObj<MovieService> =>
  jasmine.createSpyObj('MovieService', []);
