package com.fsd2020.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CompanyEntity {

	private int id;
	private String company_code;
	private String company_name;
	private int turnover;
	private String ceo;
	private String board_of_director;
	private String listed_in_se;
	private String sector_name;
	private String brife_write_up;
	private String stock_code;
	private String company_status;

}
