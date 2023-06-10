import css from './transactionhistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transactionTable}>
      <thead>
        <tr>
          <th className={css.tableHeader}>Type</th>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }, index) => {
          return (
            <tr key={id}>
              <td
                className={index % 2 === 0 ? css.tableCell : css.tableCellDark}
              >
                {type}
              </td>
              <td
                className={index % 2 === 0 ? css.tableCell : css.tableCellDark}
              >
                {amount}
              </td>
              <td
                className={index % 2 === 0 ? css.tableCell : css.tableCellDark}
              >
                {currency}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};
