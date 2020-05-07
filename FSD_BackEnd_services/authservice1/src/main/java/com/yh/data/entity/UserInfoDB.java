package com.yh.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString

// 与数据库表结构一致
public class UserInfoDB {
	private int id;
	private String user_name;
	private String password;
	private String user_type;
	private String email;
	private String mobile_num;
	private String confirmed;
	private String update_ts;
	private String veri_code;

}
