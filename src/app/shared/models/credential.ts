interface Credential {
  username: string;
  password: string;
}

export class Account implements Credential {
  username: string;
  password: string;
}

export class Register implements Credential {
  username: string;
  password: string;
}
