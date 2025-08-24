import PropTypes from 'prop-types'

function Item(props) {
    return (
        <>
        <li className={props.disponibilidade ? '' : 'indisponivel'}>
            <strong>{props.nome}</strong> — {props.valor} — {props.categoria} — {props.disponibilidade ? 'Disponível' : 'Indisponível'}
        </li>   
        </>
    );
}

Item.propTypes = {
  nome: PropTypes.string.isRequired,
  valor: PropTypes.string.isRequired,
  categoria: PropTypes.string.isRequired,
  disponibilidade: PropTypes.bool.isRequired,
};

export default Item;