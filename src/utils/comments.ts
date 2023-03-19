import type { CommentType } from "../types";

export let comments: CommentType[] = [
  {
    id: 0,
    user_id: 1,
    content:
      "The authors use a GPT model to write Python code that computes the answer to a natural-language query about a given image or video clip. The results are magical: ",
    kids: [
      {
        id: 1,
        user_id: 2,
        content:
          "Does anybody else feel glued to the back of their seat, by the accelerating centrifugal forces of the singularity?",
        kids: [
          {
            id: 2,
            user_id: 1,
            content:
              "I think tidal forces are a better analogy. As change accelerates, basically any pre-existing organisational structure will feel tension between how reality used to be and how reality is. Things will get ripped apart, like the spaghettification of objects falling into a black hole.",
            kids: [],
          },
        ],
      },
      {
        id: 3,
        user_id: 3,
        content:
          "Tidal implies cyclical, so no. This is accretive in a sense, but not in any gradual way.",
        kids: [
          {
            id: 4,
            user_id: 1,
            content:
              "I am not referring to tides, but to the tidal forces that generate them. Tidal forces are the result of a gradient in the field of gravity. When you are close to a black hole, the part of you that is closest, experiences a stronger force of gravity than the rest of your body. This tension rips things apart. Likewise, some parts of our civilization will be more affected by AI than others, causing change there to accelerate. This causes tension with the rest of civilization.",
            kids: [],
          },
          {
            id: 5,
            user_id: 1,
            content:
              "Centrifugal 'forces' also imply cycles. The other commenter is correct that it's tidal forces, not tides.",
            kids: [],
          },
        ],
      },
    ],
  },
  {
    id: 6,
    user_id: 1,
    content:
      "I've admittedly had very little free time these days, but as someone who's trying to get caught up with the field, I feel like it moves faster than I can keep up with",
    kids: [
      {
        id: 7,
        user_id: 1,
        content:
          "I suspect GPT5 most likely will have these capabilities that is to hook into external tools such as calculators and other software applications as needed based on the prompts.",
        kids: [
          {
            id: 8,
            user_id: 1,
            content:
              "Bing chat already hooks into a web search tool. It shows 'Searching for: ...' when it does that. This is kind of the point of Bing chat. edit: a paper about how to hook up LLMs to any external tool",
            kids: [],
          },
          {
            id: 9,
            user_id: 1,
            content:
              "I suspect GPT5 won't have that ability, when used in something like ChatGPT but OpenAI will happily let the people who want to do that themselves do it, and push the consequences to them.",
            kids: [],
          },
        ],
      },
    ],
  },
  {
    id: 10,
    user_id: 3,
    content: "And cut you off when you when the sh*t hits the fan.",
    kids: [
      {
        id: 11,
        user_id: 1,
        content: "BingGPT is currently doing this for web searches.",
        kids: [],
      },
    ],
  },
  {
    id: 12,
    user_id: 2,
    content:
      "Pulling in web searches is a lot more benign than calling APIs or executing arbitrary code it generates.",
    kids: [],
  },
];
