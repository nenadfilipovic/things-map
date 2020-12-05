#-------------------------------------------------------------------------------------------------------------
# Define how production version of our application
# should look like, this config is used
# also for continuous integration.
#-------------------------------------------------------------------------------------------------------------

ARG node_version

FROM node:$node_version