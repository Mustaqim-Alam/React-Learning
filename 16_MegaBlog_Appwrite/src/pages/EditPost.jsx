import { useState, useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../container/Container";
import appwriteservice from "../appwrite/ServiceConfig";
import { Postform } from "../Components";

function EditPost() {
  const [post, setPosts] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteservice.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate = "/";
        }
      });
    }
  }, [slug, navigate]);

  return post ? (
    <div className=" py-8">
      <Container>
        <Postform post={post} />
      </Container>
    </div>
  ) : null;
}

export default EditPost;
