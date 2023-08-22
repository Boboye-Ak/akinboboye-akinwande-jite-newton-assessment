process.env.NODE_ENV = "test"

const User = require("../src/models/Users")
const chai = require("chai")
const app = require("../src/index")
const expect = chai.expect
const should = chai.should()
const chaiHttp = require("chai-http")

chai.use(chaiHttp)

before((done) => {
    console.log("clearing DB before process")
    User.deleteMany({}).then(() => {
        done()
    })

})

after((done) => {
    console.log("clearing DB after process")
    User.deleteMany({}).then(() => {
        done()
    })
})




describe("/api/auth", () => {
    describe("/api/auth/signup", () => {
        it("responds with code 400 if no username or password is sent", (done) => {
            chai.request(app)
                .post("/api/auth/signup")
                .end((err, res) => {
                    res.should.have.status(400)
                    expect(res.body.message).to.be.equal("Please enter username and password")
                    done()
                })
        })
        it("responds with status code 400 if the password is invalid", (done) => {
            let user = {
                username: "boboye",
                password: "1234"
            }
            chai.request(app)
                .post("/api/auth/signup")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(400)
                    expect(res.body.message).to.be.equal("Password too weak. Passowrd must contain letters, numbers, symbols and must be at least 8 characters long with at least one capital letter")
                    done()
                })
        })

        it("should add a user if everything is fine", (done) => {
            let user = {
                username: "boboye",
                password: "$StrongPassword1234"
            }
            chai.request(app)
                .post("/api/auth/signup")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200)
                    expect(res.body.message).to.be.equal("New User Created")
                    done()
                })
        })

        it("should respond with 409 if username is duplicate", (done) => {
            let user = {
                username: "boboye",
                password: "$StrongPassword1234"
            }
            chai.request(app)
                .post("/api/auth/signup")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(409)
                    expect(res.body.message).to.be.equal("Username already in use")
                    done()
                })
        })
    })


    describe("/api/auth/login", () => {
        it("responds with code 400 if no username or password is sent", (done) => {
            chai.request(app)
                .post("/api/auth/login")
                .end((err, res) => {
                    res.should.have.status(400);
                    expect(res.body.message).to.be.equal("Please enter username and password");
                    done();
                });
        });

        it("responds with status code 404 if username does not exist", (done) => {
            let credentials = {
                username: "boboyeasasasasasasa",
                password: "$WrongPassword1234"
            };
            chai.request(app)
                .post("/api/auth/login")
                .send(credentials)
                .end((err, res) => {
                    res.should.have.status(404);
                    expect(res.body.message).to.be.equal("User with username not found");
                    done();
                });
        });

        it("responds with status code 401 if password is incorrect", (done) => {
            let credentials = {
                username: "boboye",
                password: "$WrongPassword1234"
            };
            chai.request(app)
                .post("/api/auth/login")
                .send(credentials)
                .end((err, res) => {
                    res.should.have.status(401);
                    expect(res.body.message).to.be.equal("Incorrect password");
                    done();
                });
        });

        it("should respond with a JWT token if username and password are correct", (done) => {
            let credentials = {
                username: "boboye",
                password: "$StrongPassword1234"
            };
            chai.request(app)
                .post("/api/auth/login")
                .send(credentials)
                .end((err, res) => {
                    res.should.have.status(200);
                    expect(res.body).to.have.property("accessToken");
                    expect(res.body.message).to.be.equal("Login Successful");
                    done();
                });
        });
    });


})

