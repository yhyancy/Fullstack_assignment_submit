package com.fsd2020.data.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StockPriceEntity {

	private String company_code;
	private String stock_exchange;
	private String price;
	private Timestamp price_min;
}
