import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  cdkVersion: '2.20.0',
  defaultReleaseBranch: 'main',
  name: 'step-func-circuit-breaker',
  projenrcTs: true,
  github: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
