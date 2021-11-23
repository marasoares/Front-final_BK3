import React from 'react'
import './Cadastro.css';
import Api from '../../api/api';

const Cadastro = (props) => {
  const history = props.history;

  const handleSubmit = async (evento) => {
    evento.preventDefault();
    // pego o valor que usuario digitou nos inputs
    const nome = evento.target.nome.value; 
    const autor = evento.target.autor.value;
    const editora = evento.target.editora.value;
    const paginas = evento.target.paginas.value;
    const anoLancamento = evento.target.anoLancamento.value;
    const imagemUrl = evento.target.imagemUrl.value;
    

    const livro = {
      nome,
      autor,
      editora,
      paginas,
      anoLancamento,
      imagemUrl
    }
    
    try {
      const response = await Api.fetchPost(livro)
      const result = await response.json();
      alert(result.message);
      history.push('/'); // forca o historico a voltar para a rota de / => home
    } catch(error) {
      console.log(error);
    }
    
  }

  return (
    <div className="container cadastro">
      <div className="card mt-4">
        <div className="card-title">
          <div className="row">
            <div className="col">
              <h3>Cadastro de Livros</h3>
            </div>
          </div>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="nome" id="floatingInput" placeholder="Digite o nome do Livro"/>
                  <label htmlFor="floatingInput">Nome do Livro</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input type="text" className="form-control" name="autor" id="floatingsalario" placeholder="Digite o nome do Autor"/>
                  <label htmlFor="floatingsalario">Autor</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" name="editora" id="floatingInput" placeholder="Digite o nome da Editora"/>
                  <label htmlFor="floatingInput">Editora</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input className="form-control" name="paginas" id="floatingsenioridade" placeholder="Digite a quantidade de páginas"/>
                  <label htmlFor="floatingsenioridade">Páginas</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input className="form-control" name="anoLancamento" id="floatingsenioridade" placeholder="Digite o ano de lançamento"/>
                  <label htmlFor="floatingsenioridade">Ano</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating">
                  <input className="form-control" name="imagemUrl" id="floatingsenioridade" placeholder="Digite a URL"/>
                  <label htmlFor="floatingsenioridade">URL</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <button className="btn btn-success" type="submit">Enviar</button>
                <button className="btn btn-outline-default">Voltar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
