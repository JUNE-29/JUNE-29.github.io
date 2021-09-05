const quotes = [
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney",
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
    },
    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West",
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Life is what happens to us while we are making other plans.",
        author: "Allen Saunders",
    },
    {
        quote: "Success is walking from failure to failure with no loss of enthusiasm.",
        author: "Winston Churchill",
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bobak",
    },
    {
        quote: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis",
    },
    {
        quote: "The only place where success comes before work is in the dictionary.",
        author: "Vidal Sassoon",
    },
    {
        quote: "Do not be afraid to give up the good to go for the great",
        author: "John D.Rockefeller",
    },
];

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


