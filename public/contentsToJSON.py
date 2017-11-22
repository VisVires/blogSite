import os

outfile = open('photography.json', 'w') 
start_path = '.'
for path,dirs,files in os.walk(start_path):
    for filename in files:
        outfile.write(os.path.join(path,filename))

