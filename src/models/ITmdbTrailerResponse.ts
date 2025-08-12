import type {ITrailer} from "./ITrailer.ts";

export interface ITmdbTrailerResponse {
    id: number;
    results: ITrailer[];
}