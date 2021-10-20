// $project_root/functions/quotes/quotes.js
exports.handler = async (event, context) => {

  const quotes = [
    {
      "text": "You gotta be kidding me?",
      "author": "mini musl"
    },
    {
      "text": "Will you be my neighbor?",
      "author": "maxi musl"
    },
    { "text": "Liz is awesome!",
      "author": "maxi shiy" }
  ];

  const number = Math.floor(Math.random() * quotes.length);
  const text = quotes[number];

  return {
    statusCode: 200,
    body: JSON.stringify(text)
  };

};