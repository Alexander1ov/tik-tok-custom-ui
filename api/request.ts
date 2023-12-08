import axios from "axios";

interface Options {
  method: string;
  url: string;
  headers: { "X-RapidAPI-Key": string; "X-RapidAPI-Host": string };
  body?: "URLSearchParams";
}

export const request = async ({
  path = "",
  method = "GET",
  body = undefined,
}) => {
  const options: Options = {
    method,
    url: `https://tiktok-video-no-watermark2.p.rapidapi.com/${path}`,
    headers: {
      "X-RapidAPI-Key": "1dfb343e69mshe4fe9655242e6e1p1ab9acjsn2a331534527b",
      "X-RapidAPI-Host": "tiktok-video-no-watermark2.p.rapidapi.com",
    },
  };
  if (body) options.body = body;

  try {
    const response = await axios(options);
    const result = await response.data;
    console.log(result);
    return result;
  } catch (error) {
    console.error(error);
  }
};
