package com.fsd2020.data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.fsd2020.data.entity.StockcenterEntity;

@Mapper
@Repository
public interface StockcenterMapper {

    int addStockCenter(StockcenterEntity stockCenter);
    List<StockcenterEntity> listStockcenter();
}
