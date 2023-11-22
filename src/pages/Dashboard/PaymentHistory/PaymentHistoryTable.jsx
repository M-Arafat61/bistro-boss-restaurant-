import moment from "moment";

const PaymentHistoryTable = ({ payment, index }) => {
  const { email, price, status, transactionId, date } = payment;
  const formattedDate = moment.utc(date).format("dddd, MMMM DD, YYYY");

  return (
    <tr>
      <td>{index}.</td>
      <td>{email}</td>
      <td>{transactionId}</td>
      <td>{formattedDate}</td>

      <td className='text-end'>${price.toFixed(2)}</td>
      <td>{status}</td>
    </tr>
  );
};

export default PaymentHistoryTable;
