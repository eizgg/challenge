FROM node:6-alpine

ADD src  /
ADD package.json /
ADD public /

RUN  npm install

ENV NODE_ENV production
ENV PORT 8080
EXPOSE 8080

CMD [ "npm", "start" ]