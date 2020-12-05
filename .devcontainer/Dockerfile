#-------------------------------------------------------------------------------------------------------------
# Both frontend and backend need Nodejs installed so we define it here.
# Odd versions of Nodejs is for testing new features and should not be used
# for production, also after 6 months the odd number versions
# become unsupported.
#-------------------------------------------------------------------------------------------------------------

ARG node_version

FROM node:$node_version

# Add git as it is needed for husky.

RUN apk add git