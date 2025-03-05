import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { SplitIcon, ListIcon } from 'lucide-react';

const InstallmentTable = ({
  installments,
  dueDates,
  selectedInstallments,
  setSelectedInstallments,
  unmergeInstallments,
  handleDateChange,
  splitInstallments,
  revertSplit,
  validateDate,
  selectedDates
}) => (
  <table className="table table-bordered mt-3">
    <thead>
      <tr>
        <th></th>
        <th>Install No</th>
        <th>Amount</th>
        <th>Due Date</th>
      </tr>
    </thead>
    <tbody>
      {installments.map((installment, index) => (
        <tr key={index}>
          <td>
            <input
              type="checkbox"
              checked={selectedInstallments.includes(index)}
              onChange={(e) => {
                let newSelected = [...selectedInstallments];
                if (e.target.checked) {
                  newSelected.push(index);
                } else {
                  newSelected = newSelected.filter(i => i !== index);
                }
                setSelectedInstallments(newSelected);
              }}
              disabled={installment.isMerged || installment.isSplit}
            />
            {installment.isMerged && (
              <button 
                className="btn btn-sm btn-secondary ms-2"
                style={{ padding: '2px 8px', fontSize: '10px' }}
                onClick={() => unmergeInstallments(installment.mergedKey)}
              >
                <SplitIcon className="me-1" size={12} />
              </button>
            )}
            {installment.isSplit && (
              <button
                className="btn btn-sm btn-secondary ms-2"
                style={{ padding: '2px 8px', fontSize: '10px' }}
                onClick={() => revertSplit(installment.originalKey)}
              >
                <ListIcon className="me-1" size={12} />
              </button>
            )}
          </td>
          <td>{installment.installmentNo}</td>
          <td>₹{installment.amount}</td>
          <td>
            <DatePicker
              selected={dueDates[index] || new Date()}
              onChange={(date) => handleDateChange(index, date)}
              className="form-control"
              dateFormat="dd/MM/yyyy"
              disabled={installment.isMerged}
              minDate={new Date()}
              shouldCloseOnSelect={false}
              filterDate={(date) => validateDate(date, index)}
              excludeDates={selectedDates.map(dateStr => new Date(dateStr))}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default InstallmentTable;