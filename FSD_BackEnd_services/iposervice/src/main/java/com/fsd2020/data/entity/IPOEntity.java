package com.fsd2020.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class IPOEntity {
	
	private String company_name;
	private String stock_exchange;
	private String price_per_share;
	private int total_num;
	private String remark;	
}
