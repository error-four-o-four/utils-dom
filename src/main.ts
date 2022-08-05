// https://blog.logrocket.com/using-rollup-package-library-typescript-javascript/
// https://medium.com/codex/bundling-a-typescript-library-for-node-with-rollup-js-2c8add5e736f
// https://www.thisdot.co/blog/how-to-setup-a-typescript-project-using-rollup-js

import * as environment from './environment'
import * as reading from './reading';
import * as creating from './creating'
import * as attributes from './attributes';

export default {
	...environment,
	...reading,
	...creating,
	...attributes
}