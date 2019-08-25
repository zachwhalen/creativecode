import random
import markovify
import dominate 
from dominate.tags import *
import pdfkit


novel = ''

with open("combined.txt") as f:
    text = f.read()
    
    
# Build the model.
text_model = markovify.Text(text)

for i in range(3605):
    
    
    novel += str(text_model.make_sentence()) + " "
    
    r = random.randint(0,100)
    
    if (r < 36):
        novel += "\n\n"
    
#print(novel)

chunked = novel.split("\n\n")

doc = dominate.document(title='Recipes for Revolution!')

with doc.head:
    style("body {background-color: #fff; color: #333; font-size: 15pt}")
    
with doc:
    h1("Recipes for Revolution")
    p("A NaNoGenMo 2018 Novel")
    
    for c in chunked:
        p(c)

pdfkit.from_string(str(doc.render()), 'revolution_recipe.pdf')