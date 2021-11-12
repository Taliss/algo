#!/usr/bin/env node
const { Command, Option } = require('commander');
const handlers = require('./handlers');

const program = new Command();

program
  .version('0.0.1')
  .addOption(
    new Option(
      '-a, --algorithm <name>',
      'choose algorithm',
      'algorithm to use'
    ).choices(['bubble', 'selection', 'insertion', 'quick', 'merge'])
  )
  .requiredOption('-d, --data <data>', 'data for the algorithm')
  .action(() => {
    const options = program.opts();
    let data;
    try {
      data = JSON.parse(options.data);
      if (!Array.isArray(data)) {
        throw new Error('Data is not an array');
      }

      data = data.map((value) => {
        const parsedValue = parseInt(value, 10);
        if (isNaN(parsedValue)) {
          throw new Error('Values must be numbers');
        }
        return parsedValue;
      });
    } catch (error) {
      console.error('Please provide array of numbers: ', error.message);
    }

    // call handlers here
    console.log('Input: ', data);
    console.log('Ouput: ', handlers[options.algorithm](data));
  });

program.parse();
