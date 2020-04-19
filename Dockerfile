FROM node
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
EXPOSE 3000
ENTRYPOINT ["yarn", "serve"]
