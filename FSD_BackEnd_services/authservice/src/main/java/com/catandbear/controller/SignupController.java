package com.catandbear.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.catandbear.data.entity.SignupEntity;
import com.catandbear.data.entity.UserInfoDB;
import com.catandbear.data.mapper.UserInfoMapper;
import com.catandbear.tools.MailMan;

@RestController
@CrossOrigin("*")
@RequestMapping(value="signup", method=RequestMethod.POST)
public class SignupController {

	private final UserInfoMapper userInfoMapper;
	private final MailMan mailMan;
	private static final String OK = "ok";
	
	@Value("${fsd.frontend.hostname}")
	private String feHostname;
	
	@Autowired
	private SignupController(UserInfoMapper userInfoMapper, MailMan mailMan) {
		this.userInfoMapper = userInfoMapper;
		this.mailMan = mailMan;
	}
	
	@PostMapping("")
	public String signUp(@RequestBody(required = true) SignupEntity signupEntity) {
		
		System.out.println(signupEntity.toString());
		int veriCode = validateGenerator();
		UserInfoDB userInfoDB = formatUserInfo(signupEntity, veriCode);
		System.out.println(userInfoDB.toString());
		userInfoMapper.addUser(userInfoDB);	
		
		String mailSendtoAddress = userInfoDB.getEmail();
		String subject = "Please confirm your code";
		String text = feHostname + "?" + userInfoDB.getUser_name() + "&code=" + veriCode;
		mailMan.sender(mailSendtoAddress, subject, text);

		return OK;
	}
	
	@GetMapping("validate")
	public String validateSignup(@RequestParam(required = true) String code, @RequestParam(required = true) String uname ) {
		System.out.println("code: " + code + ", name : " + uname);
		
		if (uname.length()>=10) {
			return "{\"status\":\"NOTALLOWED\"}";
		}
		
		String uName = uname;
		UserInfoDB userInfoDB= userInfoMapper.selectUserByName(uName);
		
		if (code.equals(userInfoDB.getVeri_code())) {
			userInfoMapper.updateValidate(uName);
			return "{\"status\":\"OK\"}";
		}
		
		return "{\"status\":\"FAILED\"}";
	}
	
	// Utils
	private UserInfoDB formatUserInfo(SignupEntity signupEntity, int code) {
		return new UserInfoDB(0, signupEntity.getUsername(), signupEntity.getPasswordsGroup().getPassword(), signupEntity.getUsertype(), Integer.toString(code), signupEntity.getEmail(), signupEntity.getMobile(), "N");
	}
	
	private int validateGenerator() {
		return (int)((Math.random()*9+1)*1000);
	}
}
