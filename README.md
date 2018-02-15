
# <img src='favicon.png' width='48'> @whaaaley/launchpad

> Boilerplate for building web applications.

## Install

```
npm i
```

## Env file

Duplicate `.env-example` and rename it to `.env`.

## Scripts

Ensure you have GNU make version 3.8.2 or above.

[See `Makefile` for details.](Makefile)

### Start development

Start a development server at [`http://localhost:3000/`](http://localhost:3000/) and watch for changes.

```
make
```

### Build for production

```
make build
```

## Deployment

This project uses Netlify to automatically deploy to production when commits are pushed to master.

[View the Netlify dashboard for this project.](https://app.netlify.com/sites/truckdough/overview)
