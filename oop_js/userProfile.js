class UserProfile {
  constructor(username, email, birthdate) {
    const date = new Date(birthdate);

    if (typeof username !== "string" || username.length === 0) {
      throw new Error("Invalid username.");
    }

    if (!email.includes("@")) {
      throw new Error("Invalid email.");
    }

    if (isNaN(date)) {
      throw new Error("Invalid birthdate.");
    }

    this._username = username;
    this._email = email;
    this._birthdate = birthdate;
  }

  get username() {
    return this._username;
  }

  set username(value) {
    if (typeof value !== "string" || value.length === 0) {
      throw new Error("Invalid username.");
    } else {
      this._username = value;
    }
  }

  get email() {
    return this._email;
  }

  set email(value) {
    if (!value.includes("@")) {
      throw new Error("Invalid email.");
    } else {
      this._email = value;
    }
  }

  get birthdate() {
    return this._birthdate;
  }

  set birthdate(value) {
    const date = new Date(value);
    if (isNaN(date)) {
      throw new Error("Invalid birthdate.");
    } else {
      this._birthdate = value;
    }
  }
}

const user = new UserProfile("ciprian", "ciprian@email.com", "1990-01-01");
