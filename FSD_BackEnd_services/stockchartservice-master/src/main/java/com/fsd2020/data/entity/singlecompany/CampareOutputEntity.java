package com.fsd2020.data.entity.singlecompany;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CampareOutputEntity {

	private String name;
	private List<PriceReturnEntity> price1;
	private List<PriceReturnEntity> price2;
}
