export interface BaseResponse<T> {
    message: string;
    result:  T;
}

export interface BaseResult<T> {
    properties:  T;
    description: string;
    _id:         string;
    uid:         string;
    __v:         number;
}

export interface ErrorResponse {
    message: string;
}

export interface FilmProperties {
    characters:    string[];
    planets:       string[];
    starships:     string[];
    vehicles:      string[];
    species:       string[];
    created:       Date;
    edited:        Date;
    producer:      string;
    title:         string;
    episode_id:    number;
    director:      string;
    release_date:  Date;
    opening_crawl: string;
    url:           string;
}

export interface CharacterProperties {
    height:     string;
    mass:       string;
    hair_color: string;
    skin_color: string;
    eye_color:  string;
    birth_year: string;
    gender:     string;
    created:    Date;
    edited:     Date;
    name:       string;
    homeworld:  string;
    url:        string;
}

export interface GenericObject<T> {
    [key: string]: T
}

export interface OperationResult<T> {
    result: T,
    error: ErrorResponse | null,
    isLoading: boolean;
}


export type BaseFilmResult = BaseResult<FilmProperties>;
export type BaseCharacterDetailsResult = BaseResult<CharacterProperties>;

export type FilmsResponse = BaseResponse<BaseFilmResult []>;
export type FilmDetailsResponse = BaseResponse<BaseFilmResult>;
export type CharacterDetailsResponse = BaseResponse<BaseCharacterDetailsResult>;

export type FilmsDetailsObject = GenericObject<BaseFilmResult>;
export type CharacterDetailsObject = GenericObject<BaseCharacterDetailsResult>;

export type FilmsOperationResult = OperationResult<BaseFilmResult [] | null>;
export type FilmDetailsOperationResult = OperationResult<FilmsDetailsObject | null>;
export type CharacterDetailsOperationResult = OperationResult<CharacterDetailsObject | null>;