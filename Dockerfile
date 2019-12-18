FROM node:12.0
MAINTAINER Hector
EXPOSE 8081

ENV HOME=/var/www

RUN mkdir $HOME
WORKDIR $HOME
COPY . $HOME

RUN echo "Starting deploying Dockerfile .."

RUN npm install -g @angular/cli
RUN echo "Angular CLI installed .."

RUN npm install @angular/http@latest
RUN echo "Angular HTTP installed .."


CMD ng serve --host 0.0.0.0 --port 8081



#For building image : 
#		docker build -t movieapp_image .

#For runnning the app in 8081 port:
#		docker run -it -p 8081:8081 --rm --name my_running_app movieapp_image


#For connecting to the bash console:
#		docker run -it -p 8081:8081 --rm --name my_running_app movieapp_image  bash
