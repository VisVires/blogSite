#!/usr/bin/python

import subprocess
import os

#open file
outfile = open('photography.json', 'w') 

#write beginning of json file
outfile.write('{\"photos\":[')

#hold output
output = ''

#call file naming script
subprocess.call(['./fileChange.sh'])

#write each .jpg file in directory to output
for file in os.listdir('.'):
    if file.endswith('.jpg'):
        filename = os.path.join('', file)
        output = output + ('\"/photography/'+ filename + '\", ')

#strip final comma
final = output.rstrip(', ')

#finish JSON script
outfile.write(final + ']}')

