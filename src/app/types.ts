/**
 * Defining useful and quite complex types to be used in the app
 * Types from TMDB (Media, CastMember, CrewMember, MovieCredits)
 * Homemade types (APIResult, MovieBestCredits)
 */

export interface Media {
  id?: number;
  vote_average?: number;
  title?: string;
  release_date?: string;
  overview?: string;
  poster_path?: string;
  media_type?: string;
  name?: string;
  runtime?: number;
  first_air_date?: string;
}

export interface CastMember {
  cast_id?: number;
  character?: string;
  credit_id?: number;
  gender?: number;
  id?: number;
  name?: string;
  order?: number;
  profile_path?: string;
}

export  interface CrewMember {
  credit_id?: number;
  department?: string;
  gender?: number;
  id?: number;
  name?: string;
  job?: string;
  profile_path?: string;
}

export  interface MovieBestCredits {
  directorName?: string;
  actorsNames?: Array<string>;
}

export interface MovieCredits {
  cast?: Array<CastMember>;
  crew?: Array<CrewMember>;
  id?: number;
}

export interface APIResult {
  page: number;
  results: Array<Media>;
  total_pages: number;
  total_results: number;
}
