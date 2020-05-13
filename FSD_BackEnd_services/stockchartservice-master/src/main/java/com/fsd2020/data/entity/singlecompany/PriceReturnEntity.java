package com.fsd2020.data.entity.singlecompany;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PriceReturnEntity {

	private String price;
	private Timestamp time;
}
