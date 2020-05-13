package com.fsd2020.data.entity;

import java.sql.Timestamp;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CompareInputEntity {

	private String name;
	private String code;
	private String startTime1;
	private String endTime1;
	private String startTime2;
	private String endTime2;
}
