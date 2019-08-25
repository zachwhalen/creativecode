# Three Ways to Generate a Novel

This project folder contains three different examples for generating a novel, as definied by [NaNoGenMo](http://nanogenmo.github.io). 

## Rainy Days
The python scripts in [my_rainy_day.py](my_rainy_day.py) and [another_rainy_day.py](another_rainy_day.py) generate novels by randomly repeating and arranging the words "drip" and "drop". The first uses punctionation to mimic the syntax of prose and the second prints the words vertically as a concrete poem about rain.

## Recipes for Revolution
This [python script](revolution_recipes.py) uses a Markov chain generator on some input text to generate novels that should sound something like Karl Marx mashed up with a recipe book. The script expects a file called "combined.txt" in the same directory that the script runs in, so in the example case, that file consists of text from _The Communist Manifesto_ and a recipe book.

The script also includes some libraries useful for formatting and printing the resulting text as a PDF document, so in addition to [markovify](https://github.com/jsvine/markovify), you'll also need [pdfkit](https://pypi.org/project/pdfkit/), [wkhtmltopdf](https://wkhtmltopdf.org/), and [dominate](https://github.com/Knio/dominate/).

## Tracery Bookery
The enclosed [story.json](story.json) file is a Tracery grammar that should expand a few sentences into something like 50,000 words. The actual word count will vary based on the length and number of the core sentences.

This JSON file can be dropped into [this template](https://github.com/zachwhalen/bookery).

