import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class Authservice {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
    // console.log(this.client);
    this.account = new Account(this.client);
    console.log("Current account:: ", this.account.get());
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //call another method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      // throw error;
      console.log(" Appwrite :: error", error);
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      console.log("Appwrite :: error", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("Appwrite serive :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      return await this.account.deleteSessions();
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new Authservice();

export default authService;
