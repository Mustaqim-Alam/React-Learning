import appwriteService from "../appwrite/ServiceConfig.js";
import {Link} from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={"/post/${$id}"}>
      <div className=" w-full bg-gray-100 rounded-xl p-4">
        <div className=" w-full justify-center mb-4">
          <img src={appwriteService.getFilePreview(featuredImage)} alt={title} 
          className=" rounded-xl"
           />
        </div>
          <h4 className=" text-xl font-bold  "> {title}</h4>
      </div>
    </Link>
  );
}

export default PostCard;
