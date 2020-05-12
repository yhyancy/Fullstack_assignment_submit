package com.catandbear.data.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class SignupEntity {

	private String username;
	private String email;
	private String mobile;
	private String usertype;
	private String password;
	private String pwconfirm;
	private PasswordsGroup passwordsGroup;
	
	@Data
	@ToString
	public class PasswordsGroup{
		public String password;
		public String pwconfirm;
	}
}
