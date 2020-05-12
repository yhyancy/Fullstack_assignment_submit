package com.fsd2020.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fsd2020.data.entity.ReturnedEntity;
import com.fsd2020.data.entity.StockcenterEntity;
import com.fsd2020.data.mapper.StockcenterMapper;

@RestController
@RequestMapping("admin/stockcenter")
@CrossOrigin("*")
public class StockCenterController {

	private StockcenterMapper scmapper;
	
	@Autowired
	private StockCenterController(StockcenterMapper scmapper) {
		this.scmapper = scmapper;
	}
	
	@PostMapping("add")
	public ReturnedEntity addSc (@RequestBody(required = true) StockcenterEntity stockCenter) {
		int status = scmapper.addStockCenter(stockCenter);
		if (status==1) {
			return new ReturnedEntity("ok");
		}
		return new ReturnedEntity("failed");
	}
	
	@PostMapping("list")
	public List<StockcenterEntity> listsc() {
		return scmapper.listStockcenter();
	}
}
