module.exports = {
    app: {
        name: 'gazdileszekApp',
        version: '0.0.1'
    },
    server: {
        port: 80
    },
    template: {
        path: 'app/views',
        options: {
            map: { ect: 'ect' }
        }
    },
    session: {
        secretKey: 'myKoajsSecretKey'
    }
};