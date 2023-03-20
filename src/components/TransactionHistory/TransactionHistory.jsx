import PropTypes from 'prop-types';
import css from '../TransactionHistory/TransactionHistory.module.css';

const { transactionHistory, head, row, cell } = css;

export default function TransactionHistory({ items }) {
  return (
    <table className={transactionHistory} border="1">
      <thead className={head}>
        <tr className={row}>
          <th className={cell}>Type</th>
          <th className={cell}>Amount</th>
          <th className={cell}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr className={row} key={id}>
            <td className={cell}>{type}</td>
            <td className={cell}>{amount}</td>
            <td className={cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
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
    }).isRequired,
  ).isRequired,
};
