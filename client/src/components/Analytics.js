import React from 'react'
import { Progress } from 'antd'
const Analytics = ({ allTransection }) => {
    //category

    const categories = ['salary', 'tip', 'project', 'food', 'movie', 'bills', 'fee', 'tax']

    // total Transections
    const totalTranaction = allTransection.length
    const totalIncomeTransaction = allTransection.filter(transaction => transaction.type === 'income')
    const totalExpenseTransaction = allTransection.filter(transaction => transaction.type === 'expanse')
    const totalIncomePercent = (totalIncomeTransaction.length / totalTranaction) * 100
    const totalExpensePercent = (totalExpenseTransaction.length / totalTranaction) * 100


    //total turnover
    const totalTurnover = allTransection.reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalIncomeTurnover = allTransection.filter(transaction => transaction.type === 'income').reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalExpenseTurnover = allTransection.filter(transaction => transaction.type === 'expanse').reduce((acc, transaction) => acc + transaction.amount, 0);

    const totalIncomeTurnOverPercent = (totalIncomeTurnover / totalTurnover) * 100;
    const totalExpenseTurnOverPercent = (totalExpenseTurnover / totalTurnover) * 100;
    return (
        <>
            <div className="row m-3">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Total Transactions: {totalTranaction}
                        </div>
                        <div className="card-body">
                            <h5 className='text-success'>Income: {totalIncomeTransaction.length}</h5>
                            <h5 className='text-danger'>Expense: {totalExpenseTransaction.length}</h5>
                            <div>
                                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomePercent.toFixed(0)} />
                                <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpensePercent.toFixed(0)} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Turnover  */}
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header">
                            Total Turnove: {totalTurnover}
                        </div>
                        <div className="card-body">
                            <h5 className='text-success'>Income: {totalIncomeTurnover}</h5>
                            <h5 className='text-danger'>Expense: {totalExpenseTurnover}</h5>
                            <div>
                                <Progress type='circle' strokeColor={'green'} className='mx-2' percent={totalIncomeTurnOverPercent.toFixed(0)} />
                                <Progress type='circle' strokeColor={'red'} className='mx-2' percent={totalExpenseTurnOverPercent.toFixed(0)} />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="row mt-3">

                {/* Income */}
               <div className="col-md-4">
                       <h4>Category Wise Income</h4>
                       {
                        categories.map(category=>{
                            const amount = allTransection.filter(transaction=>transaction.type==='income' && transaction.category===category).reduce((acc,transaction)=>acc+transaction.amount,0);
                            return (
                                amount>0 &&
                               ( <div className='card'>
                                     <div className="card-body">
                                        <h5>{category}:Rs.{amount}</h5>
                                        <Progress
                                         percent={((amount/totalIncomeTurnover)*100).toFixed(0)}/>
                                     </div>
                                </div>)
                            )
                        })
                       }
               </div>

{/* Expanse */}

               <div className="col-md-4">
                       <h4>Category Wise Expense</h4>
                       {
                        categories.map(category=>{
                            const amount = allTransection.filter(transaction=>transaction.type==='expanse' && transaction.category===category).reduce((acc,transaction)=>acc+transaction.amount,0);
                            return (
                                amount>0 &&
                               ( <div className='card'>
                                     <div className="card-body">
                                        <h5>{category}:Rs.{amount}</h5>
                                        <Progress
                                         percent={((amount/totalExpenseTurnover)*100).toFixed(0)}/>
                                     </div>
                                </div>)
                            )
                        })
                       }
               </div>
            </div>
        </>
    )
}

export default Analytics
