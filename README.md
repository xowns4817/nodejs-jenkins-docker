# nodejs-jenkins-docker
docker 기반 jenkins ci/cd
-> jenkins안에서 docker 띄움 ( docker in docker )

## 배포 Flow
- 1. git push
- 2. webhook을 통해 git과 연동된 jenkins에게 noti
- 3. jenkins는 저장된 script를 실행 ( 배포 )

// Dockerfile
```

FROM node:12

WORKDIR /usr/src/app

COPY . .

RUN npm install

RUN npm install pm2 -g

EXPOSE 8000

CMD ["pm2-runtime", "start", "start.config.js"]

```

//배포 스크립트
```
cd  /mnt/jenkins_test/nodejs-jenkins-docker

docker stop node-server
docker rm node-server
docker rmi node-server-image

git pull origin master
docker build -t node-server-image .
docker run -d -p 8000:8000 --name node-server node-server-image
```
