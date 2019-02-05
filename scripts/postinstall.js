// @ts-check

const shell = require('shelljs');
const path = require('path');

const node_modules = path.join(__dirname, '..', 'lib', 'node_modules');

shell.mkdir('-p', node_modules);
shell.echo('bar').to(path.join(node_modules, 'bar.txt'));

const other = path.join(__dirname, '..', 'lib', 'other');

shell.mkdir('-p', other);
shell.echo('baz').to(path.join(other, 'baz.txt'));
