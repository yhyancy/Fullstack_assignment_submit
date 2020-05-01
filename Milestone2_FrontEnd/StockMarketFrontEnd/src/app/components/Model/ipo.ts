export class IPO {
    id: number;
    companyName: string;
    stockExchange: string;
    pricePerShare: number;
    totalNumber: string;
    openDateTime: Date;
    remark: string;
}

// 用于 admin用户 manage company 生成CompanyIpo
export class IPO1 {
    stockExchange: string;
    pricePerShare: number;
    totalNumber: string;
    openDateTime: Date;
    remark: string;
}