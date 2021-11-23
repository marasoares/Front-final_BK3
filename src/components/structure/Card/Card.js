import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  const vaga = props.data;
  return (
    <Link to={`/view/${vaga._id}`} className="col">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{ vaga.nome }</h5>
          <span className="badge bg-primary">{ vaga.autor }</span>
          <img src={vaga.imagemUrl} alt="" width="50%"/>
        </div>
      </div>
    </Link>
  )
}

export default Card
