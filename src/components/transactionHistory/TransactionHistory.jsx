import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>{'Type'}</th>
          <th>{'Amount'}</th>
          <th>{'Currency'}</th>
        </tr>
      </thead>
      {items.map(({ id, type, amount, currency }) => (
        <tbody>
          <tr id={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
