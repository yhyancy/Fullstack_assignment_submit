package com.fsd2020.data.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.fsd2020.data.entity.IPOEntity;

@Mapper
@Repository
public interface IPOMapper {

    // IPO 
    int addIPO(IPOEntity ipo);
    List<IPOEntity> listIPO();
}
