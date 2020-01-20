package com.book.utils;


import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class TokenUtils {
    private static final Logger logger = LoggerFactory.getLogger(TokenUtils.class);

    public static String createToken(String username, String url) {
        String token="";
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            token = JWT.create()
                    .withIssuer("auth0")
                    .withClaim("username", username)
                    .withClaim("url", url)
                    .sign(algorithm);
        } catch (JWTCreationException exception){
            logger.error("Couldn't create token. Invalid configuration.");
        }

        return token;
    }

    public static void verifyToken(String token, String username, String url) {
        try {
            Algorithm algorithm = Algorithm.HMAC256("secret");
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer("auth0")
                    .withClaim("username", username)
                    .withClaim("url", url)
                    .build(); //Reusable verifier instance
            verifier.verify(token);
        } catch (JWTVerificationException exception) {
            logger.error("Invalid token");
        }
    }
}
