docker-compose down
docker-compose rm -f
docker rmi deployment_frontend
docker rmi deployment_backend
docker rmi mongo
