import {expect, test} from '@oclif/test'

describe('ali-flow', () => {
  test
  .stdout()
  .command(['ali-flow'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['ali-flow', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
