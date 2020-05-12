package com.fsd2020.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd2020.data.entity.CompanyEntity;
import com.fsd2020.data.entity.ReturnedEntity;
import com.fsd2020.data.mapper.CompanyMapper;

@RestController
@RequestMapping("admin/company")
@CrossOrigin("*")
public class ManagementController {
	
	private CompanyMapper companyMapper;
	
	@Autowired
	private ManagementController(CompanyMapper companyMapper) {
		this.companyMapper = companyMapper;
	}
	
	@PostMapping("add")
	public ReturnedEntity addCompany(@RequestBody(required = true) CompanyEntity company) {
		
		int status = companyMapper.addCompany(company);
		if (status==1) {
			return new ReturnedEntity("ok");
		}
		return new ReturnedEntity("failed");
	}
	
	@PostMapping("disable")
	public ReturnedEntity disableCompany(@RequestBody(required = true) CompanyEntity company) {
				
		int status = companyMapper.disableCompanyByCode(company.getCompany_code());
		if (status ==1) {
			return new ReturnedEntity("ok");
		}
		return new ReturnedEntity("failed");
	}
	
	@PostMapping("update")
	public ReturnedEntity updateCompany(@RequestBody(required = true) CompanyEntity company) {
				
		int status = companyMapper.updateCompany(company);
		if (status == 1) {
			return new ReturnedEntity("ok");
		}
		return new ReturnedEntity("failed");
	}
	
	@PostMapping("list")
	public List<CompanyEntity> listCompany() {
		return companyMapper.listCompany();
	}
	
	@PostMapping("name")
	public CompanyEntity getCompanyByName(@RequestBody(required = true) CompanyEntity company) {
		return companyMapper.getCompanyByName(company.getCompany_name());
	}
	
	@PostMapping("code")
	public CompanyEntity getCompanyByCode(@RequestBody(required = true) CompanyEntity company) {
		return companyMapper.getCompanyByCode(company.getCompany_code());
	}
}
