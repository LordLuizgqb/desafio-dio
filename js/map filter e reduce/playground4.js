const lista = [
    {
        name: 'Sabão',
        value: 30,
    },
    {
        name: 'cereal',
        value: 12,
    },
    {
        name: 'toalha',
        value: 30,
    }

];

const MeuSaldo = 100;

function CalculaSaldo(MeuSaldo, lista){
    return lista.reduce(function(prev,current, index){
        console.log('Rodada',  index + 1)
        console.log({ prev })
        console.log({ current })
        return prev - current.value
    }, MeuSaldo);
}

console.log(CalculaSaldo(MeuSaldo, lista))
