# because we need randomness
import random

# create a variable to store the lines
lines = []

# iterate through 75 columns
for c in range(75):
    lines.append('')
    # add something to each column 5000 times
    for i in range(5000):
        
        # always start with a space, just because
        lines[c] += " "

        # a random seed
        r = random.randint(0,100)
        
        # every now and then (about 3% of the time), add a DROP
        if (r < 3):
            lines[c] += "DROP"
            
        # every now and then (about 10% of the time), add a DROP
        elif(r > 90):
            lines[c] += "DRIP"
            
        #otherwise, just add another space
        else:
            lines[c] += " "

# make a string to store the novel
rain = ''
      
# now, "rotate" the lines, printing one character of each at 75 times
# Do 8000 lines just to make sure we don't go beyond the index of any individual column
for l in range(8000): 
    for c in range(75):
        rain += lines[c][l]
    rain += "\n"


# print the novel to a file
with open('my_other_rainyday.txt', 'w') as f:
    f.write(rain)