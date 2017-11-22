#!/usr/bin/python

import os

outfile = open('photography.json', 'w') 

outfile.write('{\"photos\":[')

output = ''
for file in os.listdir('.'):
    if file.endswith('.jpg'):
        filename = os.path.join('', file)
        output = output + ('\"/photography/'+ filename + '\", ')

final = output.rstrip(', ')
outfile.write(final + ']}')

