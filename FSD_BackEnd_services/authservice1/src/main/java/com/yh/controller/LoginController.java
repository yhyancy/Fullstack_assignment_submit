package com.yh.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.yh.data.entity.LoginEntity;
import com.yh.data.entity.LoginReturn;
import com.yh.data.entity.UserInfoDB;
import com.yh.data.mapper.UserInfoMapper;
import com.yh.tools.TokenTool;

@RestController
@CrossOrigin("*") //允许跨域
public class LoginController {
	@Autowired
	UserInfoMapper userInfoMapper;
	
	@RequestMapping("/login")
	public LoginReturn authUnamePwd(@RequestBody(required = true) LoginEntity authUser, HttpServletRequest res, HttpServletResponse req) {
		if(authUser==null) {
			return new LoginReturn("","",0,"");
		}
		UserInfoDB authInfoDB= userInfoMapper.selectUserByName(authUser);
		// 密码错误
		if(!authInfoDB.getPassword().equals(authUser.getPassWord())) {
			return new LoginReturn("","",-1,"");
		}
		// 密码正确
		else {
			String token= TokenTool.getToken(authInfoDB);
			return new LoginReturn(token,authInfoDB.getUser_name(),1,authInfoDB.getUser_type());
		}
	}

}
