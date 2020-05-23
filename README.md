This is a fork of the following sample project https://github.com/robmclarty/knex-express-project-sample

This repository was created as a bug report for knex to show that it doesn't respect the `NODE_PATH` environment variable.
More information on `NODE_PATH` here: https://nodejs.org/api/cli.html#cli_node_path_path

It contains the aforementioned forked repository, but with the following changes:
- all code files moved inside a `src/` folder
- the code is containerized with Docker and docker-compose
- the container has `NODE_PATH=src` environment variable set (and database connection environment variables as well)

Run it with `docker-compose up --build`
Then run seeds with `docker-compose exec example /bin/bash`, followed by `npm run db:seed`

If you're running master, you'll notice that there is an error when running `npm run db:seed`
This doesn't happen before setting the `NODE_PATH=src/` environment variable (i.e. in commit `d96f7988d7bb8da9463311605ebb1aa90a21e1f7`)

`NODE_PATH` allows us to resolve import paths from an absolute location, so it has no effect in commit `7aef5b055fa5154615d3de15fd7575cf605363f0`.
but as soon as we add an absolute import, running seeds (or any knex command that calls a file with absolute imports), it fails with _Error: Cannot find module 'examplefile'_.
To further illustrate the point, the _examplefile_ is used with absolute imports when the server starts, and that does not cause any issues.

# Expected Behaviour
We are able to require with absolute paths when running knex commands when `NODE_PATH` is set, just as running regular node code does.
