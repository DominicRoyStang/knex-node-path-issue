#!/usr/bin/env node

'use strict'

const PORT = process.env.PORT || 3000

const app = require('../server')

// THIS WORKS WHEN RUNNING WITH REGULAR NODEJS
const printhelloworld = require('examplefile');

printhelloworld();

app.listen(PORT, () => {
  console.log(`Server started on port ${ PORT }`)
}).on('error', err => {
  console.log('ERROR: ', err)
})
