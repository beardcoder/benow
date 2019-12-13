import { createClient } from 'contentful';

// use default environment config for convenience
// these will be set via `env` property in nuxt.config.js

const config = {
    space: '22eos54kli61',
    accessToken: 'tpfrb9QLpT370g5_OuEuEMCURteRzZbJ8bX_aqeevxE',
};

// export `createClient` to use it in page components
export default createClient(config);
