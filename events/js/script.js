function meuEscopo(){
    const form = document.querySelector('.form');
    const res = document.querySelector('.res');
    const arrPessoas = [];

    form.addEventListener('submit', function(evento){
        evento.preventDefault();
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        arrPessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value, 
            altura: altura.value
            });

        console.log(arrPessoas);

        res.innerHTML += `<p> ${nome.value} ${sobrenome.value}, ${peso.value}, ${altura.value} </p>`;
    });
}

meuEscopo();