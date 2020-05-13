package com.fsd2020.tools;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class InsertDataController {

	// insert price function
//	@Autowired
//	private StockPriceMapper mapper;

	
	@GetMapping("add")
	private void dateTool() {

		System.out.println("this is add controller, no method will be invoked");
		
//		long startTime = 1577808000000l;
//		long endTime = 1578412800000l;
//		System.out.println((endTime - startTime) / 60000);
//
//		List<StockPriceEntity> list = new ArrayList<>();
//		for (long start = startTime; start < endTime; start = start + 60000) {
//
//			if (list.size() < 500) {
//				list.add(new StockPriceEntity("9529", "BSE", random(200.00f, 650.00f), new Timestamp(start)));
//			} else {
//				mapper.addPrice(list);
//				list.clear();
//			}
//		}
//		System.out.println("for done");
//		mapper.addPrice(list);
//		list.clear();
//		System.out.println("all done");
	}

	// 生成 begin 到 end 之间的随机数
//	private String random(float begin, float end) {
//		float rtn = begin + (float) (Math.random() * (end - begin));
//		if (rtn == begin || rtn == end)
//
//		{
//			return random(begin, end);
//		}
//		return String.format("%.2f", rtn);
//	}

}
