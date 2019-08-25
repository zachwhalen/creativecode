# because we always need randomness
import random

# create a variable to store the novel as it's being written
novel = ''

# iteration
for i in range(50000):
    # add this word to the "novel" 50,000 times
    novel += " DRIP"
    
    # add some variety with randomness
    r = random.randint(0,100)
    
    # every now and then (about 3% of the time), add a paragraph break
    if (r < 3):
        novel += ".\n\n "
    # every now and then (about 10% of the time), add end punctuation
    elif(r > 90):
        novel += random.choice([". ","? ",". ","; "])
    
# print the novel to a file
with open('my_rainyday.txt', 'w') as f:
    f.write(novel)