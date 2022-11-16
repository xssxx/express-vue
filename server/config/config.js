module.exports = {
    port: 8081,
    db: {
        database: process.env.DB_NAME || 'express-vue',
        user: process.env.DB_USER || 'express-vue',
        password: process.env.DB_PASS || 'express-vue',
        options: {
            dialect: process.env.DIALECT || 'sqlite',
            host: process.env.HOST || '127.0.0.1',
            storage: './express-vue.sqlite'
        }
    }
}