
# start mongo on port default-port 27017
docker run --name mymongo -p 27017:27017 -d mongo
 
# start your node
# run the node source code from current folder $(pwd)
docker run -v $(pwd):/app -w "/app" --link mymongo:mongo_db node "npm run watch"



