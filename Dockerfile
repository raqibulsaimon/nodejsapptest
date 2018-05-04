# use official node 
FROM node:carbon

#directory for the application
WORKDIR /app

#copy content to /app directory
copy package*.json /app

#install app dependent packages
RUN npm install

#Bundle app source
copy . .

# make port 80 available to outside this container
EXPOSE 80


#run app.py when the container launches
CMD ["npm","start"]

