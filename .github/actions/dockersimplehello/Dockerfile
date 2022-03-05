FROM alpine:3.11


# Install dos2unix to guarantee the correct format of the file
RUN apk add dos2unix

# Create a group and user
RUN addgroup -S appgroup && adduser -S rayita -G appgroup

# add specific user to run the shell
RUN apk add sudo
RUN echo "rayita ALL=(ALL) ALL" > /etc/sudoers.d/rayita && chmod 0440 /etc/sudoers.d/rayita

# Do then everything else as that user
USER rayita

# Set the working directory
WORKDIR /rayita

# Copy the script from our repository
COPY entrypoint.sh ./entrypoint.sh

#Give all permission to entrypoint
RUN chmod +x /entrypoint.sh

# execute the entrypoint in the docker container
ENTRYPOINT [ "./entrypoint.sh" ]
# we can pass arguments to entrypoint it would be 
#CMD ["executable"]