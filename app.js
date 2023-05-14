
const quotes = [
    {
        quote: "Anyone who can handle a needle convincingly can make us see a thread which is not there.",
        name: "E. H. Gombrich (1909 - )"
    },
    {
        quote: "Doing what you love means dealing with things you don't.",
        name: "David Shore, House M.D."
    },
    {
        quote: "It is not always the same thing to be a good man and a good citizen.",
        name: "Aristotle (384 BC - 322 BC)"
    },
    {
        quote: "Partying is such sweet sorrow.",
        name: "Robert Byrne"
    },
    {
        quote: "The days of the digital watch are numbered.",
        name: "Tom Stoppard (1937 - )"
    },
    {
        quote: "You don't understand anything until you learn it more than one way.",
        name: "Marvin Minsky"
    }
];

function randomQuote() {
    const container = document.querySelector(".container");
    //get random quote from quotes array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    //create quote div
    const quoteText = document.createElement("div");
    quoteText.textContent = quote.quote;
    container.insertBefore(quoteText, container.lastElementChild);
    //create name div
    const name = document.createElement("div");
    name.textContent = quote.name;
    container.insertBefore(name, container.lastElementChild);
}

const button = document.querySelector(".button");
button.addEventListener("click", randomQuote);




