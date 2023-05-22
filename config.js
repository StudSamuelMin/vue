const production = {
    PORT :3000,
    DB : {
        host : "localhost",
        user : 'root',
        database : 'vue',
        password : 'root',
        port : "3306",
        connectionLimit : 20,
        connectionTimeout : 5000,
    },
}

const development = {
    PORT :4000,
    SECRET_KEY: "$2a$12$U3fh66EhjEts.vUTORXno.DKg1b30h8Z26fZll8lHUoEKIsqKYLdK",

    DB : {
        host : "localhost",
        user : 'root',
        database : 'vue',
        password : 'root',
        port : "3306",
        connectionLimit : 20,
        connectionTimeout : 5000,
    },
}

module.exports = { production, development }
