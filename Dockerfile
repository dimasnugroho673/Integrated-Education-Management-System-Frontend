FROM node:14 as builder

WORKDIR ./frontend/academic

RUN npm run build

FROM nginx:alpine AS build

COPY --from=builder ./frontend/academic/build /usr/share/nginx/html/academic
COPY --from=builder ./frontend/elearning/build /usr/share/nginx/html/elearning
COPY --from=builder ./frontend/elearning/build /usr/share/nginx/html/elearning
# COPY ./frontend/academic/build /usr/share/nginx/html/academic
# COPY ./frontend/elearning/build /usr/share/nginx/html/elearning
# COPY ./frontend/auth/build /usr/share/nginx/html/auth

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]