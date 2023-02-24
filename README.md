# that-api-schema

> **Warning**: This is v4 of `that-api-schema`. It's intended use is with Apollo server version 3 && 4. It is not compatible with Apollo server v2. V1 of this library is [here](https://github.com/ThatConference/that-api/tree/v1). (There is no v2 of this library) ⚠

Shared schema bits between entity services (e.g enums)

@thatconference/schema

Each exportable schema piece returns a GraphQL DocumentNode which can be merged into the rest of the services schema with `mergeTypeDefs()`. For Example:

```javascript
import path from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { productTypeEnum } from '@thatconference/schema';

const typesArray = loadFilesSync(path.join(__dirname, './**/*.graphql'));

export default mergeTypeDefs([typesArray, productTypeEnum], { all: true });
```

## Publishing new versions

1. ENSURE `package.json` version is updated to new semver value!
1. Create a release in GitHub using `v` + semver value as tag (e.g. `v1.1.0`)
   - Add release notes and changes made to this version
1. From local command line at same tag point run `$ npm run npm:publish`
   - version is published to [npmjs.com](https://www.npmjs.com/package/@thatconference/schema)
