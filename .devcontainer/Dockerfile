ARG BASE_IMAGE
FROM ${BASE_IMAGE}

ARG WORKSPACE
ARG HOME_DIR
ARG GROUP
ARG GROUP_ID
ARG USER
ARG USER_ID
ARG USER_PASSWORD


# RUN export USER_GROUP=$(getent group ${GROUP_ID} | cut -d: -f1)

# RUN USER_GROUP=$(getent group ${GROUP_ID} | cut -d: -f1) && \
#     USER_GROUP_LOWER=$(echo "$USER_GROUP" | tr '[:upper:]' '[:lower:]') && \
#     if [ "$USER_GROUP_LOWER" = "ubuntu" ]; then \
#         echo "Error: Group name '$USER_GROUP' is not allowed. Exiting..." >&2; \
#         exit 1; \
#     fi
# WORKDIR ${WORKSPACE}

# RUN EXISTING_GROUP=$(getent group ${GROUP_ID} | cut -d: -f1) && \
#     if [ -z "$EXISTING_GROUP" ]; then \
#         groupadd -g ${GROUP_ID} ${GROUP}; \
#     fi && \
#     groupmod -n ${GROUP} ${EXISTING_GROUP}
    
# RUN EXISTING_USER=$(getent passwd ${USER_ID} | cut -d: -f1) && \
#     if [ -z "$EXISTING_USER" ]; then \
#         useradd -s /bin/bash -u ${USER_ID} -g ${GROUP_ID} -m ${USER}; \
#     fi && \
#         usermod -l ${USER} -d /home/${USER} -m ${EXISTING_USER} -g ${GROUP_ID}

# RUN chown -R ${USER}:${GROUP} ${WORKSPACE}
# RUN chmod -R 755 ${WORKSPACE}



# # # ---------- FILE SYSTEM SETUP ----------
# # ENV HOME_DIR=${HOME}

# # RUN mkdir -p ${HOME}
# # WORKDIR ${HOME}

# # ENV USER_HOME=${HOME}/${USER}

# # WORKDIR ${USER_HOME}



# # ---------- USER ----------
# # Create group

# # RUN USER_GROUP=$(getent group ${GROUP_ID} | cut -d: -f1) && \
# #     if [ -z "$USER_GROUP" ]; then \
# #         groupadd -g ${GROUP_ID} ${GROUP}; \
# #         USER_GROUP=${GROUP}; \
# #     fi
# # ENV USER_GROUP=${USER_GROUP}


# # # # # Set correct ownership & permissions

# # # RUN chmod 700 ${USER_HOME}  
# # RUN chown -R ${USER_ID}:${GROUP_ID} /home/{USER}

# # # # # Securely set password
# # RUN echo "${USER}:${USER_PASSWORD}" | chpasswd



# # # ---------- SYSTEM SETUP ----------


# # # # Allow limited sudo (not full root access)
# # # RUN echo "${USER} ALL=(ALL) NOPASSWD:/usr/bin/apt,/usr/bin/dpkg,/usr/bin/systemctl" > /etc/sudoers.d/${USER}

# # # # Secure sudoers file
# # # RUN chmod 0440 /etc/sudoers.d/${USER}




# # # # WORKDIR ${USER_WORKSPACE}
# # # RUN USER_GROUP=$(getent group ${GROUP_ID} | cut -d: -f1) && \
# # #     if [ -z "$USER_GROUP" ]; then \
# # #         groupadd -g ${GROUP_ID} ${GROUP}; \
# # #         USER_GROUP=${GROUP}; \
# # #     fi
# # # # RUN groupadd -g ${GROUP_ID} ${GROUP}
# # # ENV USER_GROUP=${USER_GROUP}

# # # # RUN apt-get update && apt-get install -y sudo

# # RUN chown -R ${USER} .

# # RUN chmod -R 700 .
# # # [Optional] Set the default user. Omit if you want to keep the default as root.
# USER ${USER}
# WORKDIR USER


# # ---------- USER ----------
# # ARG GROUP
# # ARG GROUP_ID
# # ARG USER
# # ARG USER_ID
# # ARG USER_PASSWORD
# # ARG WORKSPACE

# # USER root

# # # Create group and user
# # RUN groupadd -g ${GROUP_ID} ${GROUP} && \
# #     useradd -s /bin/bash -u ${USER_ID} -g ${GROUP_ID} -m ${USER}

# # # Set password for the user
# # RUN echo "${USER}:${USER_PASSWORD}" | chpasswd

# # # Set ownership and permissions for the user's home and workspace
# # RUN chown -R ${USER}:${GROUP} ./
# # RUN chmod -R 700 ./

# # # ---------- SYSTEM SETUP ----------
# # USER ${USER}  # Switch to the user for the rest of the Dockerfile


# # Start with a base image, in this case, ubuntu
# FROM ubuntu:latest

# # Set arguments for user/group setup
# ARG USER=dev
# ARG USER_UID=1000
# ARG USER_GID=$USER_UID
# ARG GROUP=devgroup

# # Install necessary packages
# RUN apt-get update && apt-get install -y \
#     sudo \
#     bash \
#     git \
#     && rm -rf /var/lib/apt/lists/*

# # Create a group and a user
# RUN groupadd --gid $USER_GID $GROUP \
#     && useradd --uid $USER_UID --gid $USER_GID -m $USER \
#     && echo "$USER ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USER \
#     && chmod 0440 /etc/sudoers.d/$USER

# # Set the working directory
# WORKDIR /workspace

# # Ensure the user has full access to the workspace
# RUN chown -R $USER:$GROUP /workspace

# # Switch to the non-root user


# # Set default shell
# CMD [ "bash" ]
# Start with a base image, in this case, ubuntu

# Set the username and group

# ARG USERNAME
# ARG USER_UID=1000
# ARG USER_GID=$USER_UID

# RUN groupmod --gid $USER_GID $USERNAME \
#     && useradd --uid $USER_UID --gid $GROUP_ID -m  $USERNAME \
#     && chown -R $USER_UID:$USER_GID /home/$USERNAME

RUN apt-get update && apt-get install -y \
    sudo \
    bash \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/*
    # && echo $USER ALL=\(root\) NOPASSWD:ALL > /etc/sudoers.d/$USER \
    # && chmod 0440 /etc/sudoers.d/$USER \    
    

# USER ${USER}

CMD [ "bash" ]
