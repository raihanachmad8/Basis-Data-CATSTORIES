import supertest from "supertest";
import { app } from "../src/app/web";
import jwt from "jsonwebtoken";
import { configureEnvironment } from "../src/config/env";
import { logger } from "../src/app/logging";
import userService from "../src/services/user-service";
configureEnvironment("../../.env");

describe("POST /api/v1/users/auth/login", () => {
    
    it("should return 401 Unauthorized cause users access another link before login", async () => {
        const response = await supertest(app).get("/api/v1/users/auth/current");

        expect(response.status).toBe(401);
    });


    it("should return 404 Not Found if try access wrong path login page", async () => {
        const response = await supertest(app)
            .post("/api/v1/users/login/")
            .send({
                username: "admin",
                password: "admin",
            });
        expect(response.status).toBe(404);
    });

    it("should return 500 Internal Server Error if have error where validation", async () => {
        jest.spyOn(userService, "login").mockImplementation(() => {
            throw new Error();
        });
        const response = await supertest(app)
            .post("/api/v1/users/auth/login")
            .send({
                username: "admin",
                password: "wrongpassword",
            });
        expect(response.status).toBe(500);
    });
});


jest.mock("../src/services/user-service", () => ({
    login: jest.fn(),
    get: jest.fn(),
}));
const agent = supertest.agent(app);

describe("User Controller Tests", () => {
    describe("POST /userslogin", () => {
        it("should return 200 and set Authorization cookie on successful login", async () => {
            // Mock userService.login using mockImplementation
            userService.login.mockImplementation(() => {
                return Promise.resolve({
                    username: "admin",
                    password: "admin",
                });
            });

            const response = await agent.post("/api/v1/users/auth/login").send({
                username: "admin",
                password: "admin",
            });

            expect(response.status).toBe(200);
            expect(response.body.status).toBe(200);
            expect(response.body.message).toBe("Login success");
            expect(response.body.data.user.username).toBe("admin");
            expect(response.body.data.token).toBeDefined();

            // Verify that the token is valid
            const decodedToken = jwt.verify(
                response.body.data.token,
                process.env.JWT_KEY
            );
            expect(decodedToken.user.username).toBe("admin");

            // Verify that the Authorization cookie is set
            const cookies = response.headers["set-cookie"];
            expect(cookies).toBeDefined();
            expect(cookies[0]).toContain("Authorization=");
            
        });
        
        
    });

    describe("GET /api/v1/users/auth/current", () => {
        it("should return 200 and user data using Authorization cookie", async () => {
            // Mock userService.get using mockImplementation
            userService.get.mockImplementation(() => {
                return Promise.resolve({
                    username: "admin",
                });
            });

            // Log in the user and set the authorization cookie
            const loginResponse = await agent
                .post("/api/v1/users/auth/login")
                .send({
                    username: "admin",
                    password: "admin",
                });

            const response = await agent.get("/api/v1/users/auth/current");

            expect(response.status).toBe(200);
            expect(response.body.status).toBe(200);
            expect(response.body.message).toBe("Get user success");
            expect(response.body.data.user.username).toBe("admin");
        });
    });
});
