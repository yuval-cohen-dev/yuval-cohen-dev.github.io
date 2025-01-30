ARG BASE_IMAGE
FROM ${BASE_IMAGE}


RUN apt-get update && apt-get install -y \
    sudo \
    bash \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*

CMD [ "/bin/sh" ]
