import noAvatar from "../assets/images/no_avatar.jpg";
import noImage from "../assets/images/no_image.png";
import { shape, string, number, arrayOf, objectOf } from "prop-types";

export const isEmptyObj = obj => {
  return Object.keys(obj).length === 0;
};

const defaultImg = type => {
  switch (type) {
    case "avatar":
      return noAvatar;
    case "poster":
    default:
      return noImage;
  }
};

export const imgSrc = (imgPath = "", width = 0, type = "poster") => {
  if (!imgPath) return defaultImg(type);

  const w = width === 0 ? "" : `/w${width}`;
  return `https://image.tmdb.org/t/p${w}${imgPath}`;
};

export const paramsToQueryString = params => {
  if (isEmptyObj(params)) return "";
  let s = "";
  const keys = Object.keys(params);
  keys.forEach(k => {
    if (k === keys.slice(0)[0]) s += "?";
    s += `${k}=${encodeURIComponent(params[k])}`;
    if (k !== keys.slice(-1)[0]) s += "&";
  });

  return s;
};

export const queryStringToParams = query => {
  if (query.length === 0) return {};

  const params = {};
  const queries = query.substring(1).split("&");

  for (let i = 0; i < queries.length; i++) {
    const values = queries[i].split("=");
    params[values[0]] = values[1] || "";
  }
  return params;
};

export const updateUrlParams = (newParams, $window = window) => {
  const { pathname, search } = $window.location;

  if (isEmptyObj(newParams)) return pathname;

  const oldParams = queryStringToParams(search);
  const queryParams = paramsToQueryString({ ...oldParams, ...newParams });

  window.history.replaceState({}, "", `${pathname}${queryParams}`);
};

export const numberRange = (begin, end) => {
  const result = [];

  for (let i = begin; i <= end; i++) {
    result.push(i);
  }

  return result;
};

export const movieType = shape({
  id: number.isRequired,
  poster_path: string,
  title: string.isRequired,
  vote_average: number.isRequired
});

export const genresObjType = objectOf(string);

export const genresType = arrayOf(
  shape({
    id: number.isRequired,
    name: string.isRequired
  })
);

export const backdropsType = arrayOf(
  shape({
    file_path: string.isRequired
  })
);

export const actorType = shape({
  id: number.isRequired,
  name: string.isRequired,
  character: string.isRequired,
  profile_path: string
});

export const movieDetailsType = shape({
  images: shape({
    backdrops: backdropsType
  }),
  title: string,
  genres: genresType,
  overview: string,
  credits: shape({
    cast: arrayOf(actorType)
  }),
  vote_average: number,
  release_date: string,
  runtime: number
});

export const selectedOptionType = shape({
  sort_by: string,
  with_genres: string
});

export const menuItemType = shape({
  name: string.isRequired,
  field: string.isRequired
});
