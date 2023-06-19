const PaymentHistoryTableHead = () => {
  return (
    <thead className="bg-base-200 bg-opacity-50">
      <tr className="text-white text-xs">
        <th className="">No</th>
        <th className="">Course</th>
        <th className="">Transaction ID</th>
        <th className="">Date</th>
        <th className="">Time</th>
        <th className="">Amount</th>
        <th className="">Status</th>
      </tr>
    </thead>
  );
};

export default PaymentHistoryTableHead;
