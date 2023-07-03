module.exports = {
  apps: [
    {
      name: 'letsbenow',
      exec_mode: 'cluster',
      instances: '2', // Or a number of instances
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      env_production: {
        APP_ENV: 'prod', // APP_ENV=prod
      },
    },
  ],
}
