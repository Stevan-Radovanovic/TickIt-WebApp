export class User {
  constructor(
    private email: string,
    private password: string,
    private token: string,
    private tokenExpirationDate: Date
  ) {
    this.email = email;
    this.password = password;
    this.token = token;
    this.tokenExpirationDate = tokenExpirationDate;
  }

  getToken() {
    return this.token;
  }

  getTokenExpirationDate() {
    return this.tokenExpirationDate;
  }

  getEmail() {
    return this.email;
  }

  getPassword() {
    return this.password;
  }
}
