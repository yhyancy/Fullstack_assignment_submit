export class IPO {
    id: number;
    company_name: string;
    stock_exchange: string;
    price_per_share: number;
    total_num: string;
    open_date_time: Date;
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