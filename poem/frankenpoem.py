import random
from textblob import TextBlob

# This looks for a file called "frankenstein.txt" 
# in the same directory as my python notebook or script.
# Replace "frankenstein.txt" with your file's name.
# The text file's contents are stored in the variable "text"
# These are comments
with open('frankenstein.txt', 'r') as file:
    text = file.read()

# This parses the text file contents into a TextBlob oject called "blob"
blob = TextBlob(text)

# Create two empty lists for storing adjectives and nouns
adjectives = []
nouns = []
verbs = []

# TextBlob parses the words and labels them with a part-of-speech tag.
# This code loops through the whole text, checks for adjectives and nouns
# and adds them to the appropriate list.
for word,pos in blob.tags:
    # print(word,pos)
    if (pos == 'JJ'):
        adjectives.append(word)
    if (pos == 'NN'):
        nouns.append(word)
    if (pos == 'VB'):
        verbs.append(word)

# This generates an eight-line poem by pairing a random adjective 
# with a random noun eight times and printing the pairs.
for i in range(8):
    a1 = random.choice(adjectives)
    a2 = random.choice(adjectives)
    n1 = random.choice(nouns)
    n2 = random.choice(nouns)
    n3 = random.choice(nouns)
    vb = random.choice(verbs)
    print(n1 + " " + a1 + " " +  vb  + " " + a2  + " " + n3)