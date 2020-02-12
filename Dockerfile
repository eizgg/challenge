FROM node:6-alpine

ADD  /src/
ADD package.json /app
ADD  /public/

RUN  npm install

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

WORKDIR "/app"
CMD [ "npm", "start" ]