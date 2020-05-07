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

//返回给前端的数据格式
public class LoginReturn {
	
	private String token;
	private String uName;
	private int isAuth;
	private String uType;	

}
