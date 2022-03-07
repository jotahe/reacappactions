FROM alpine:3.11

# Install bash to use it
RUN apk update && apk upgrade && apk add bash

# Create a group and user
#RUN addgroup -S appgroup && adduser -S rayita -G appgroup

# add specific user to run the shell
#RUN apk add sudo
#RUN echo "rayita ALL=(ALL) ALL" > /etc/sudoers.d/rayita && chmod 0440 /etc/sudoers.d/rayita

# Do then everything else as that user
#USER rayita

# Set the working directory
WORKDIR /rayita

# Copy the script from our repository
COPY entrypoint.sh ./entrypoint.sh


# execute the entrypoint in the docker container
ENTRYPOINT [ "/rayita/entrypoint.sh" ]
# we can pass arguments to entrypoint it would be 
#CMD ["executable"]

# To build the image
# nerdctl build -t dorckersimplehello .
# To run the container
# nerdctl run --rm -it dockersimplehello