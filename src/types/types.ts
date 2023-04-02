export interface IShow {
    id: number;
    name: string;
    rating: number | null;
    image: string | null;
}

export interface IShowDetailed {
    id: number;
    image: string | null;
    name: string;
    rating: number | null;
    genres: string[];
    summary: string;
    cast: {
        name: string;
        character: string;
        photo: string | null;
    }[];
}

export interface IState {
    series: IShow[],
    singleShow: IShowDetailed | null,
    isLoading: boolean;
    isError: boolean;
}

export interface IServerDataShowResult {
    score: number;
    show: IServerDataShow;
}

export interface IServerDataShow {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string | null;
    schedule: {
        time: string;
        days: string[];
    };
    rating: {
        average: number;
    } | null;
    weight: number;
    network: {
        id: number;
        name: string;
        country: {
        name: string;
        code: string;
        timezone: string;
        };
        officialSite: string | null;
    } | null;
    webChannel: {
        id: number;
        name: string;
        country: {
        name: string;
        code: string;
        timezone: string;
        };
        officialSite: string | null;
    } | null;
    dvdCountry: string | null;
    externals: {
        tvrage: number;
        thetvdb: number;
        imdb: string;
    };
    image: {
        medium: string;
        original: string;
    } | null;
    summary: string;
    updated: number;
    _links: {
        self: {
        href: string;
        };
        previousepisode: {
        href: string;
        } | null;
    };
}

export interface IServerDataShowDetailed {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: string;
    ended: string;
    officialSite: string | null;
    schedule: {
      time: string;
      days: string[];
    };
    rating: {
      average: number;
    } | null;
    weight: number;
    network: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string | null;
    } | null;
    webChannel: {
      id: number;
      name: string;
      country: {
        name: string;
        code: string;
        timezone: string;
      };
      officialSite: string | null;
    } | null;
    dvdCountry: string | null;
    externals: {
      tvrage: number;
      thetvdb: number;
      imdb: string;
    };
    image: {
      medium: string;
      original: string;
    } | null;
    summary: string;
    updated: number;
    _links: {
      self: {
        href: string;
      };
      previousepisode: {
        href: string;
      } | null;
    };
    _embedded: {
      cast: {
        person: {
          id: number;
          url: string;
          name: string;
          country: {
            name: string;
            code: string;
            timezone: string;
          };
          birthday: string | null;
          deathday: string | null;
          gender: string | null;
          image: {
            medium: string;
            original: string;
          } | null;
          updated: number;
          _links: {
            self: {
              href: string;
            };
          };
        };
        character: {
          id: number;
          url: string;
          name: string;
          image: {
            medium: string;
            original: string;
          };
          _links: {
            self: {
              href: string;
            };
          };
        };
        self: boolean;
        voice: boolean;
      }[];
    };
  }