# test shell commands

#  curl -v -H @{'apikey' = 'my_key'} URL

curl -v -H @{'apikey' = 'l7xx05fe2840e03a4fa18783ea76f76e2458'} https://api.stm.info/pub/od/gtfs-rt/ic/v2/vehiclePositions

curl -v -H "apikey: l7xx05fe2840e03a4fa18783ea76f76e2458" https://api.stm.info/pub/od/gtfs-rt/ic/v2/vehiclePositions



curl -v -H "apikey: l7xx05fe2840e03a4fa18783ea76f76e2458" -H "origin: https://undeen.com" https://api.stm.info/pub/od/i3/v1/messages/etatservice/