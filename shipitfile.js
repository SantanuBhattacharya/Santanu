module.exports = function (shipit) {
    require('shipit-deploy')(shipit);
    require('shipit-shared')(shipit);

    shipit.on('deployed', () => {
        shipit.remote(`cd ${shipit.currentPath} && npm i`)
        .then(() => shipit.remote(`cd ${shipit.currentPath} && ./node_modules/.bin/sequelize db:migrate --env=production`))
        .then(() => shipit.remote(`cd ${shipit.config.deployTo}/shared && cp ./app_config.json ${shipit.currentPath}/src/config.json`))
        .then(() => shipit.remote('pm2 stop textmybiz-bot'))
        .then(() => shipit.remote(`pm2 start ${shipit.currentPath}/src/app.js --name textmybiz-bot -- production`));
    });

    shipit.initConfig({
        default: {
            workspace: '/tmp/github-monitor',
            deployTo: '/home/deployer/textmybiz-bot',
            repositoryUrl: 'git@github.com:BotCube/textmybiz-bot.git',
            ignores: ['.git', 'node_modules'],
            rsync: ['--del'],
            keepReleases: 2,
            shallowClone: true,
        },
        production: {
            servers: 'deployer@138.197.65.229',
            branch: 'master',
        },
    });
};
