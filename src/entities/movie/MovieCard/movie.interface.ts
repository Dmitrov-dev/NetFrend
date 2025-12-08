import { Key } from "react";

export interface IMovie {
    [x: string]: Key | null | undefined;
    name: string,
    image: string,
    rating: number,
    trailerRutubeId: string
}