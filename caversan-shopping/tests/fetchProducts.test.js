require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // fail('Teste vazio');
  it('1 - Teste a função fecthProducts', async () => {
    expect(typeof fetchProducts).toEqual('function');
  })
  it('2 - Teste se a função fetchProducts com parametro computador e ve se fetch foi chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })
  it('3 - Teste se ao chamar a função fetchProducts com computador como parametro, usa o endpoint https://api.mercadolibre.com/sites/MLB/search?q=computador ', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  })
  it('4 - Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  })
  it('5 - Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect(await fetchProducts()).toEqual(new Error ('You must provide an url'));
  })
});
