package com.catandbear.data.entity;

public class LoginReturn {

	private String token;
	private String uName;
	private int isAuth;
	private String uType;
	
	


	public LoginReturn(String token, String uName, int isAuth, String uType) {
		super();
		this.token = token;
		this.uName = uName;
		this.isAuth = isAuth;
		this.uType = uType;
	}


	public String getuName() {
		return uName;
	}


	public void setuName(String uName) {
		this.uName = uName;
	}


	public int getIsAuth() {
		return isAuth;
	}


	public void setIsAuth(int isAuth) {
		this.isAuth = isAuth;
	}


	public LoginReturn() {
	}


	public String getuType() {
		return uType;
	}
	public void setuType(String uType) {
		this.uType = uType;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	
	
	
}
