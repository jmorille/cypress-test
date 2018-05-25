FROM cypress/browsers

RUN npm i -g cypress

ADD cypress /data/
RUN ls -al /data

WORKDIR /data
CMD cypress run