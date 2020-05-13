package com.fsd2020.controller.companycompare;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd2020.data.entity.CompareInputEntity;
import com.fsd2020.data.entity.muticompany.MutiCompanyInputEntity;
import com.fsd2020.data.entity.muticompany.MutiCompanyOutputEntity;
import com.fsd2020.data.entity.singlecompany.CampareOutputEntity;
import com.fsd2020.data.entity.singlecompany.PriceReturnEntity;
import com.fsd2020.data.mapper.ChartPriceMapper;

@RestController
@RequestMapping("compare")
@CrossOrigin("*")
public class CompanyController {

	private ChartPriceMapper mapper;

	@Autowired
	private CompanyController(ChartPriceMapper mapper) {
		this.mapper = mapper;
	}

	@PostMapping("company/single")
	public CampareOutputEntity getSingleCompanyPrices(@RequestBody(required = true) CompareInputEntity singleCompare) {

		singleCompare.setCode(mapper.getCompanyCode(singleCompare.getName()));
		return new CampareOutputEntity(singleCompare.getName(), mapper.getPrice1(singleCompare),
				mapper.getPrice2(singleCompare));
	}

	// {"name1":"company1", "name2":"company2", "startTime": "2020-05-3 12:33",
	// "endTime": "2020-05-3 12:33"}
	@GetMapping("company/muticompare")
	private MutiCompanyOutputEntity compareMutiCompany(MutiCompanyInputEntity companies) {

		System.out.println(companies.toString());

		companies.setCode1(mapper.getCompanyCode(companies.getName1()));
		companies.setCode2(mapper.getCompanyCode(companies.getName2()));

		List<PriceReturnEntity> mutiPrice1 = mapper.getMutiCompanyPrice1(companies);
		List<PriceReturnEntity> mutiPrice2 = mapper.getMutiCompanyPrice1(companies);

		return new MutiCompanyOutputEntity(companies.getName1(), companies.getName2(), mutiPrice1, mutiPrice2);
	}

}
