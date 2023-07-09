FROM python:3.11.4-slim-bullseye

WORKDIR /src

RUN apt update \
    && apt install -y gcc default-libmysqlclient-dev pkg-config \
    && rm -rf /var/lib/apt/lists/*

RUN pip install mysql-connector-python \
    pymysql \
    pandas \
    fastapi \
    uvicorn \
    django \
    requests \
    httpx 

ADD ./modelosEScripts /modelosEScripts

ADD ./csvs /csvs

ENTRYPOINT [ "python", "/modelosEScripts/preLoadInfos.py" ]