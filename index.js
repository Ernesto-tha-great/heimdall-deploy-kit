#!/usr/bin/env node
const yargs = require('yargs');
const { hideBin } = require('yargs/helpers');

yargs(hideBin(process.argv))
  .command('hello [name]', 'say hello to a given name', (yargs) => {
    return yargs
      .positional('name', {
        describe: 'name to say hello to',
        default: "world"
      });
  }, (argv) => {
    if (argv.verbose) console.info('Running with verbose logging');
    console.log(`hello ${argv.name}`);
  })
  .option('verbose', {
    alias: 'v',
    type: 'boolean',
    description: 'Run with verbose logging'
  })
  .help()
  .demandCommand()
  .parse();
