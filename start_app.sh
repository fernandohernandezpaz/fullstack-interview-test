#!/usr/bin/env bash
echo 'Init apps'

docker-compose up -d

docker-compose exec flatbackend_app python manage.py migrate

docker-compose exec flatbackend_app sh -c "python manage.py test"

cd frontend/githistory/

npm i

npm start

echo 'END'
