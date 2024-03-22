import { Client, Storage, Databases, ID, Query } from "appwrite";
import config from "../config/config";

export class Service {
  clint = new Client();
  Databases;
  Storage;

  constructor() {
    this.clint
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.clint);
    this.storage = new Storage(this.clint);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatePost :: error", error);
    }
  }

  async getPost(slug){
    try {
      await this.databases.getDocument(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        slug,
      )
      return true;
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]){
    try {
      return await this.databases.listDocuments(
        config.appwriteDatabaseId,
        config.appwriteCollectionId,
        queries
      )
    } catch (error) {
      console.log("Appwrite service :: getAllPost :: error", error);
      return false;
    }
  }

  //Upload file service methods

  async uploadFile(file){
    try {
      await this.databases.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file
      )
      return true;
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false
    }
  }

  async deleteFile(fileId){
    try {
      await this.bucket.deleteFile(
        config.appwriteBucketId,
        fileId
      )
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId){ 
    return this.bucket.getFilePreview(
      config.appwriteBucketId,
      fileId,
    )
  }

}

const service = new Service();

export default service;
