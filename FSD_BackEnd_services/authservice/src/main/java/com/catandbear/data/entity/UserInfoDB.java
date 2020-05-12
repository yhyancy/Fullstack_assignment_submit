package com.catandbear.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class UserInfoDB {

	private int id;
	private String user_name;
	private String password;
	private String user_type;
	private String veri_code;
	private String email;
	private String mobile_num;
	private String confirmed;
}
