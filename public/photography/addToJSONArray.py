#!/usr/bin/python

import os
import json
import string
import sys

def addPic():
    pic = sys.argv[1]
    if len(sys.argv) != 2:
        print "Correct usage ./addToJSONArray.py image.jpg"

    picPath = '/photography/' + pic
    print picPath

    location = raw_input("Where was this photo taken? ")
    caption = raw_input("What caption would you like too add to this photo?")



    #get photography json file
    with open("photography.json") as f:
        data = f.read()

    #add updated item to json file
    parsed = json.loads(data)
    parsed['photos'].append({'photo':picPath, 'location': location, 'caption': caption})
    print parsed['photos']

    f.close()

    outfile = open('outfile.json', 'w')
    outfile.write(json.dumps(parsed))
addPic()

