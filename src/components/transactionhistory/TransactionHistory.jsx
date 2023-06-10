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
        {items.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id}>
              <td className={css.tableCell}>{type}</td>
              <td className={css.tableCell}>{amount}</td>
              <td className={css.tableCell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
