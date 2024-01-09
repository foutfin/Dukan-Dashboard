interface Transaction {
    orderId: number;
    orderDate: string;
    orderAmount: number;
    transactionFee: number;
}

interface TransactionMockApiType {
    curPage: number;
    totalPage: number;
    res: Transaction[];

}
