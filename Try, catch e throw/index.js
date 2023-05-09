try { //* Tente executar esse bloco, caso ocorra algum erro caia no bloco catch
    console.log(naoExisto);
} catch (err) {
    console.log('naoExisto não existe');
    console.log(err); //* Para ver o erro
}

//! Erros com funções

function soma (x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw('x e y precisam ser numeros'); //* Para lançar o erro
        //throw new Error('x e y precisam ser numeros'); //* Faz com que se torne um erro normal no js
    }

    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));
} catch (error) {
    console.log(error);
    console.log('Alguma coisa mais amigavel pro usuario');
}

//! Tratando o lançamento de erros

try {
    //* É executada quando não ha erros
    console.log(a);
    console.log('Abri um arquivo');
    console.log('Manipulei o arquivo e gerou um erro');
    console.log('Fechei o arquivo');

    try {
        console.log(b);
    } catch(e) {
        console.log('Deu erro');
    } finally {
        console.log('Tambem sou um finally');
    }
} catch (e) {
    //* É exucutada quando ha erros
    console.log('Tratando o erro');
} finally {
    //* Sempre sera executado
    console.log('FINALLY: Eu sempre sou executado');
}

function retornaHora (data) {
    if (data && !(data instanceof Date)) {//* Se essa data for enviada e nao for uma instancia de date
        throw new TypeError('Esperando instancia de Date.');
    }

    if (!data) {
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour12: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retornaHora(11);
    console.log(hora);
} catch (e) {
    //* Tratar erro
} finally {
    console.log('Tenha um bom dia');
}