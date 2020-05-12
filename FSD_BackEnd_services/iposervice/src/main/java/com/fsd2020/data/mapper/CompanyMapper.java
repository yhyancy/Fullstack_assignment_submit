package com.fsd2020.data.mapper;


import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.fsd2020.data.entity.CompanyEntity;

@Mapper
@Repository
public interface CompanyMapper {

    int addCompany(CompanyEntity company);
    int disableCompanyByCode(String company_code);
    int updateCompany(CompanyEntity company);
    
    List<CompanyEntity> listCompany();
    CompanyEntity getCompanyByName(String companyName);
    CompanyEntity getCompanyByCode(String companyCode);
}