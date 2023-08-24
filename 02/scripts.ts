type Item = {
    nome: string,
    descricao: string,
    valor: number
}

type Cartao = {
    numero: number,
    validade: string,
    nome: string,
    cvv: number
}

type Carrinho = {
    item: Item,
    qtd: number,
    desconto: number,
    frete: number,
    tipoTransacao: 'credito' | 'Debito',
    cartao: Cartao
}

type Endereco = {
    cep: string
    rua: string
    bairro: string
    cidade: string
    estado: string
}

type TipoTransacao = {
    tipoTransacao: Lowercase<'credito' | 'debito'>
}

type DadosDeCompra = Exclude<Omit<Carrinho, 'tipoTransacao'> | { endereco: Endereco } | TipoTransacao, undefined>

// ou
type DadosDeCompra2 = Omit<Carrinho, 'tipoTransacao'> & { endereco: Endereco } & TipoTransacao