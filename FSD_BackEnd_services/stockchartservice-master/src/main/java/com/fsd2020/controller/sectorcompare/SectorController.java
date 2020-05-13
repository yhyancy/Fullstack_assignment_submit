package com.fsd2020.controller.sectorcompare;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd2020.data.entity.CompareInputEntity;
import com.fsd2020.data.entity.singlecompany.CampareOutputEntity;
import com.fsd2020.data.mapper.ChartPriceMapper;

@RestController
@RequestMapping("compare")
@CrossOrigin("*")
public class SectorController {
	private ChartPriceMapper mapper;

	@Autowired
	private SectorController(ChartPriceMapper mapper) {
		this.mapper = mapper;
	}
	
	@PostMapping("sector/single")
	public CampareOutputEntity getSingleCompanyPrices(@RequestBody(required = true) CompareInputEntity singleCompare) {

		singleCompare.setCode(mapper.getCompanyCode(singleCompare.getName()));
		return new CampareOutputEntity(singleCompare.getName(), mapper.getPrice1(singleCompare),
				mapper.getPrice2(singleCompare));
	}
}
