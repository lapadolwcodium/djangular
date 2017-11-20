FROM python:3.6.3
ENV PYTHONUNBUFFERED 1

# Change Timezone to GMT+7
ENV TZ=Asia/Bangkok
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

RUN apt-get update \
    && apt-get install -y gettext\
    && pip install pipenv

WORKDIR /ton/dev

COPY Pipfile Pipfile.lock ./

COPY ./src .

RUN pipenv install --system --dev

EXPOSE 8000

# CMD echo $(ls)

CMD python tryangular/manage.py runserver 0.0.0.0:8000