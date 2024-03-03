import OpenAI from "openai";

const connetOpenAI = (key) => {
  const openai = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });
  return openai;
};

export default connetOpenAI;
