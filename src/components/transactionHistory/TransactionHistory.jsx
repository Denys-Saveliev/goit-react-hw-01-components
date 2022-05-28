import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({ items }) {
  return (
    <table class={s.table}>
      <thead>
        <tr>
          <th className={s.head}>{'Type'}</th>
          <th className={s.head}>{'Amount'}</th>
          <th className={s.head}>{'Currency'}</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody className={s.tbody}>
          <tr id={id}>
            <td className={s.data}>{type}</td>
            <td className={s.data}>{amount}</td>
            <td className={s.data}>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
