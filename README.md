@ittlr/tlr-cli
==============

tlr all tools

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@ittlr/tlr-cli.svg)](https://npmjs.org/package/@ittlr/tlr-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@ittlr/tlr-cli.svg)](https://npmjs.org/package/@ittlr/tlr-cli)
[![License](https://img.shields.io/npm/l/@ittlr/tlr-cli.svg)](https://github.com/ittlr/tlr-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g @ittlr/tlr-cli
$ tlr COMMAND
running command...
$ tlr (-v|--version|version)
@ittlr/tlr-cli/0.0.1 darwin-arm64 node-v15.6.0
$ tlr --help [COMMAND]
USAGE
  $ tlr COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`tlr ali-flow [FILE]`](#tlr-ali-flow-file)
* [`tlr hello [FILE]`](#tlr-hello-file)
* [`tlr help [COMMAND]`](#tlr-help-command)

## `tlr ali-flow [FILE]`

describe the command here

```
USAGE
  $ tlr ali-flow [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/ali-flow.ts](https://github.com/ittlr/tlr-cli/blob/v0.0.1/src/commands/ali-flow.ts)_

## `tlr hello [FILE]`

describe the command here

```
USAGE
  $ tlr hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ tlr hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ittlr/tlr-cli/blob/v0.0.1/src/commands/hello.ts)_

## `tlr help [COMMAND]`

display help for tlr

```
USAGE
  $ tlr help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
