import React from 'react';
import InstallmentForm from './InstallmentForm';
import InstallmentTable from './InstallmentTable';
import useInstallmentLogic from './useInstallmentLogic';

const EmiForm = () => {
  const {
    recommendedAmount,
    setRecommendedAmount,
    installmentCount,
    setInstallmentCount,
    selectedInstallments,
    setSelectedInstallments,
    installments,
    dueDates,
    mergedRows,
    splitRows,
    mergeInstallments,
    unmergeInstallments,
    handleDateChange,
    splitInstallments,
    revertSplit,
    validateDate
  } = useInstallmentLogic();

  return (
    <div className="container mt-5">
      <h4>Installment Payment Form</h4>
      <InstallmentForm
        recommendedAmount={recommendedAmount}
        setRecommendedAmount={setRecommendedAmount}
        installmentCount={installmentCount}
        setInstallmentCount={setInstallmentCount}
      />
      <h5>Installment Details</h5>
      <InstallmentTable
        installments={installments}
        dueDates={dueDates}
        selectedInstallments={selectedInstallments}
        setSelectedInstallments={setSelectedInstallments}
        unmergeInstallments={unmergeInstallments}
        handleDateChange={handleDateChange}
        splitInstallments={splitInstallments}
        revertSplit={revertSplit}
        validateDate={validateDate}
      />
      <div className="mt-3">
        <button type="button" className="btn btn-primary me-2" onClick={mergeInstallments}>
          <span>Merge  </span>
        </button>
        <button type="button" className="btn btn-primary" onClick={splitInstallments}>
          <span>Split  </span>
        </button>
      </div>
    </div>
  );
};

export default EmiForm;