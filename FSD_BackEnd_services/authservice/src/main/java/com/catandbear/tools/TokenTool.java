package com.catandbear.tools;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.catandbear.data.entity.UserInfoDB;

public class TokenTool {
	public static String getToken(UserInfoDB user) {
        return JWT.create().withAudience(user.getUser_name())
                .sign(Algorithm.HMAC256(user.getPassword()));
    }
}
