type Conn = {
    username: string,
    password: string,
    host: string,
    port: string,
    dbname: string
}

type Objeto = {
    driver: string,
    url: string
}

const conexao = (dados: Conn): Readonly<Objeto> => {
    const { username, password, host, port, dbname } = dados;
    return {
        driver: 'postgres',
        url: `postgresql://${username}:${password}@${host}:${port}/${dbname}`
    };
}