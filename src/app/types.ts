export interface Movie {
  id?: number;
  video?: boolean;
  vote_count?: number;
  vote_average?: number;
  title?: string;
  release_date?: string;
  original_language?: string;
  original_title?: string;
  backdrop_path?: string;
  adult?: boolean;
  overview?: string;
  poster_path?: string;
  popularity?: number;
  media_type?: string;
  belongs_to_collection?: object;
  budget?: number;
  genres?: Array<object>;
  homepage?: string;
  imdb_id?: string;
  production_companies?: Array<object>;
  production_countries?: Array<object>;
  revenue?: number;
  runtime?: number;
  spoken_languages?: Array<object>;
  status?: string;
  tagline?: string;
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
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}
