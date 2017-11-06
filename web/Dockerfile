

FROM alpine

RUN apk add --update nodejs nodejs-npm

WORKDIR full-stack-devops-poc
ADD ./package.json ./ 
RUN npm install

ADD . .
RUN npm run test
RUN npm run build

FROM alpine
RUN apk update && apk add lighttpd

COPY --from=0 /full-stack-devops-poc/public/ /var/www/localhost/htdocs/
# CMD rc-service lighttpd start
 CMD ["lighttpd", "-D", "-f", "/etc/lighttpd/lighttpd.conf"]

