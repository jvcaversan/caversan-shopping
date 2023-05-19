require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Teste se fetchItem é uma funcao', async () => {
    expect(typeof fetchItem).toEqual('function');
  })
  it('2 - Teste se a função fetchItem com argumento MLB1615760527 e ve se fetch foi chamada', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  })
  it('3 - Teste se ao chamar a função fetchItem com argumento MLB1615760527 , usa o endpoint "https://api.mercadolibre.com/items/MLB1615760527" ', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  })
  it('4 - Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item, que já está importado no arquivo.', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item);
  })
  it('5 - Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: You must provide an url.', async () => {
    expect(await fetchItem()).toEqual(new Error ('You must provide an url'));
  })
  // fail('Teste vazio');
});