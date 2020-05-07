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

// 与前端传过来的参数格式保持一致
public class LoginEntity {

	public String userName;
	public String passWord;

}
