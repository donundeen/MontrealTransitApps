# MontrealTransitApps
some apps and tools and examples for accessing the Montreal Transit API


# Notes to self

To commit all changes to github, and to get the latest:

cd ~/Documents/htdocs/MontrealTransitApps;  git pull; git  add --all ; git commit -m"new changes" ;  git push


# in
stallation

- clone the repo
- run npm install
- copy secrets.tpl.json to secrets.json and populate/changes the values there as necessary


# Usefule Resources

loading and parsing json with arduino esp32: https://randomnerdtutorials.com/decoding-and-encoding-json-with-arduino-or-esp8266/

RUnning on Glitch as a server:
https://montrealstmapi.glitch.me/107/18

https://glitch.com/edit/#!/montrealstmapi?path=routes.js%3A81%3A0


You need the stop_times.txt in the gtfs_stm.zip file here: https://www.stm.info/en/about/developers ("Download GTFS")
look up your STOP ID (you can find in Google Maps for your stop) and then the stop_sequence. (this might be more complicated if the bus stop has more than one route...)



