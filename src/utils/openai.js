import OpenAI from "openai";
import { API_KEY } from "./constant";

const connetOpenAI = (key) => {
  const openai = new OpenAI({
    apiKey: key, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });
  return openai;
};

export default connetOpenAI;
