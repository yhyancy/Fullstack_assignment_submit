package com.fsd2020.data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.fsd2020.data.entity.StockPriceEntity;

@Mapper
@Repository
public interface StockPriceMapper {

	int addPrice(StockPriceEntity price);
	int addPrice(@Param("prices")  List<StockPriceEntity> prices);

}
