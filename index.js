import * as core from '@actions/core';

const name = core.getInput('name')
const output_value = 'Hello ${name} from GITHUB-ACTHELLO!';
core.setOutput('greeting', output_value)