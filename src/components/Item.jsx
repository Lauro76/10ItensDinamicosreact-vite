import PropTypes from 'prop-types'

function Item({nome, valor, categoria, disponibilidade}) {
    return (
        <>
        <li className={disponibilidade ? '' : 'indisponivel'}>
            {nome} — {valor} — {categoria} — {disponibilidade ? 'Disponível' : 'Indisponível'}
        </li>   
        </>
    );
}

Item.propTypes = {
  nome: PropTypes.string,
  valor: PropTypes.string,
  categoria: PropTypes.string,
  disponibilidade: PropTypes.bool,
};

export default Item;