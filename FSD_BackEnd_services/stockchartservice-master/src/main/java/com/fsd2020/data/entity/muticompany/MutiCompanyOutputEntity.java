package com.fsd2020.data.entity.muticompany;

import java.util.List;

import com.fsd2020.data.entity.singlecompany.PriceReturnEntity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class MutiCompanyOutputEntity {

	private String name1;
	private String name2;
	List<PriceReturnEntity> price1;
	List<PriceReturnEntity> price2;
}
