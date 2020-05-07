package com.yh.tools;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.yh.data.entity.UserInfoDB;


public class TokenTool {	
	public static String getToken(UserInfoDB user) {
        return JWT.create().withAudience(user.getUser_name())
                .sign(Algorithm.HMAC256(user.getPassword()));
    }
}
