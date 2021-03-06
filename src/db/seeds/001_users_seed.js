'use strict'

const { User } = require('../../server/models')
const printhelloworld = require('examplefile'); // THIS DOES NOT WORK WITH `knex` COMMANDS

printhelloworld();

exports.seed = knex => knex(User.tableName).del()
  .then(() => [
    {
      username: 'admin',
      password: 'password',
      email: 'admin@email.com'
    },
    {
      username: 'first-user',
      password: 'another-password',
      email: 'first-user@email.com'
    }
  ])
  .then(newUsers => Promise.all(newUsers.map(user => User.create(user))))
  .catch(err => console.log('err: ', err))
