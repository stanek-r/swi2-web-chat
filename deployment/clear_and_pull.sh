git reset --hard HEAD
git pull
docker-compose rm -f
docker rmi deployment_frontend
docker rmi deployment_backend