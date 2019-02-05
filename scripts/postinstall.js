// @ts-check

const shell = require('shelljs');
const path = require('path');

const folderPath = path.join(__dirname, '..', 'lib', 'node_modules');

shell.mkdir('-p', folderPath);
shell.echo('bar').to(path.join(folderPath, 'bar.txt'));
