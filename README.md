
# MOVIEHUB

This repo contains the frontend source code of **MovieHub**. For more information, checkout the [backend repo](https://github.com/josepaludo/moviehub.git) that contains the fullstack app code, which can be run with a simple ```docker compose up``` command.

## Table of Contents

1. [Requirements](#requirements)
2. [Step by Step](#step-by-step)
3. [Overview](#overview)

## Requirements

- Node:18
- The **MovieHub**'s backend server

## Step by step

- Clone the repostory by running ```git clone https://github.com/josepaludo/moviehub-frontend.git```
- Then ```cd moviehub-frontend``` to enter the cloned directory
- Run ```npm install``` to install the node dependencies
- Follow the steps shown on the [backend repo](https://github.com/josepaludo/moviehub.git) to spin up a dev server.
- Set the PRODUCTION env variable as false on the backend's ```.env```.
- Run ```npm run dev``` and open your browser on [localhost:5173](http://localhost:5173)

## Overview

**MovieHub** is a fullstack application built with React on the frontend with a simple express backend, using typescript on both ends.

With **MovieHub** Users can discover and search movies, find information on those movies and listen to samples of their soundtracks.

This repo contains the code of the frontend. The code for the backend can be seen [here](https://github.com/josepaludo/moviehub.git).
