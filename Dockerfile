FROM nginx:1.9.9
RUN rm /bin/sh && ln -s /bin/bash /bin/sh

# make sure apt is up to date
RUN apt-get update

# install nodejs and npm
RUN apt-get install -y nodejs npm git git-core curl

COPY ./www/ /usr/local/share/www
#COPY SSL CERT AND KEYS
COPY ./config/ /usr/local/share/config
ADD  ./run.sh /usr/local/share/run.sh

ADD  ./config/nginx/nginx.conf /etc/nginx/nginx.conf
ADD  ./config/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
ADD  ./config/nginx/conf.d/bogus.conf /etc/nginx/conf.d/bogus.conf

ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 0.12.4

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash \
    && source $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default \
    && npm config set registry http://registry.npmjs.org/ \
    && npm update -g npm \
    && npm install -g grunt-cli

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH      $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH



#EXPOSE 80 443
EXPOSE 8080

ENV NODE_ENV  prod
ENV PORT      8000

WORKDIR /usr/local/share
RUN /usr/local/share/run.sh

#WORKDIR /usr/local/share/www
#RUN npm cache clean && npm install --unsafe-perm

CMD [ "node", "server.js" ]
CMD ["nginx", "-g", "daemon off;"]