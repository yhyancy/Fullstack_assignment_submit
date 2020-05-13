package com.fsd2020.data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.fsd2020.data.entity.CompareInputEntity;
import com.fsd2020.data.entity.muticompany.MutiCompanyInputEntity;
import com.fsd2020.data.entity.singlecompany.PriceReturnEntity;

@Mapper
@Repository
public interface ChartPriceMapper {
	
	String getCompanyCode(String companyName);
	
	// Single Company Compare
	List<PriceReturnEntity> getPrice1(CompareInputEntity single);
	List<PriceReturnEntity> getPrice2(CompareInputEntity single);
	
	// Muti company compare
	List<PriceReturnEntity> getMutiCompanyPrice1(MutiCompanyInputEntity entity);
	List<PriceReturnEntity> getMutiCompanyPrice2(MutiCompanyInputEntity entity);
	
}
