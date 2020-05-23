This is a fork of the following sample project https://github.com/robmclarty/knex-express-project-sample

This repository was created as a bug report for knex to show that it doesn't respect the `NODE_PATH` environment variable

Run it with `docker-compose up --build`
Then run seeds with `docker-compose exec example /bin/bash`, followed by `npm run db:seed`

If you're running master, you'll notice that there is an error when running `npm run db:seed`
This doesn't happen before setting the `NODE_PATH=src/` environment variable (i.e. in commit d96f7988d7bb8da9463311605ebb1aa90a21e1f7)

`NODE_PATH` allows us to resolve import paths from an absolute location.
