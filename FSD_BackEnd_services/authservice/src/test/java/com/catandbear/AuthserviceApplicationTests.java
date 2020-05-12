package com.catandbear;

import org.junit.Before;
import org.junit.Test;
import org.junit.jupiter.api.DisplayName;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.alibaba.fastjson.JSON;
import com.catandbear.data.entity.LoginEntity;

@RunWith(SpringRunner.class)
@SpringBootTest(classes=AuthserviceApplication.class)
//@WebAppConfiguration
public class AuthserviceApplicationTests {

    @Autowired
    private WebApplicationContext webApplicationContext;
    
    private MockMvc mockMvc;

    @Before
    public void setUp() throws Exception{
        mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();//建议使用这种
    }

    @Test
    @DisplayName("Test Login Controller")
    public void test() throws Exception {
        LoginEntity user = new LoginEntity();
        user.setUserName("dlyhua");
        user.setPassWord("123456");
        
        System.out.println(user.toString());
        
        MvcResult mvcResult = mockMvc.perform(
        		MockMvcRequestBuilders.post("/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(JSON.toJSONString(user)))
                .andReturn();
        
        System.out.println("content1 ==========" + mvcResult.getResponse().getContentAsString());
        System.out.println(" ==========" );
        
        for(String str : mvcResult.getResponse().getHeaderNames()) {
        	System.out.println(str + " : " + mvcResult.getResponse().getHeader(str));
        }
    }

}
