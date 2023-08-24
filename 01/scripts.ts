type Usuario = {
    nome: string,
    email: string,
    cpf: string,
    rg: string
    dataNacimento?: string
}

type usuarioInfo = Required<Omit<Usuario, 'rg'>>

// OU 
type usuarioSemRg = Omit<Usuario, 'rg'>
type informacoesObrigatorias = Required<usuarioSemRg>

const cadastrarUsuário = (info: Usuario): Usuario => {
    return info;
}
