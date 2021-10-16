FROM nginx:alpine AS build

COPY ./frontend/academic/build /usr/share/nginx/html/academic
COPY ./frontend/elearning/build /usr/share/nginx/html/elearning
COPY ./frontend/auth/build /usr/share/nginx/html/auth

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# USER root

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
# CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/nginx.conf && nginx -g 'daemon off;'

# USER docker

# ADD nginx/nginx.conf /etc/nginx/conf.d/default.template

# CMD sh -c "envsubst \"`env | awk -F = '{printf \" \\\\$%s\", $1}'`\" < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/nginx.conf && nginx -g 'daemon off;'"