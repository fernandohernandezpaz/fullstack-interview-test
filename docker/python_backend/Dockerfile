FROM python:3.7-alpine
RUN apk update && apk add --no-cache jpeg-dev \
        zlib-dev gcc python3-dev musl-dev git  \
    --no-cache postgresql-libs && \
    apk add --no-cache --virtual .build-deps gcc musl-dev postgresql-dev
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED=1
WORKDIR /app
COPY requirements.txt /app/
RUN python3 -m pip install -U --force-reinstall pip
RUN pip install -r requirements.txt

EXPOSE 8001