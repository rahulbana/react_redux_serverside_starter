export NODE_ENV=development
export SERVER_PORT=4000
export DB_PORT=27017
export DB_HOST=localhost
export DB_NAME=testDB

if [ $NODE_ENV = "development" ]
then
npm run dev
else
npm start
fi
