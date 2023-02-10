import { useEffect, useState, useCallback } from "react";
import CarouselModel from "../components/Homepage/CarouselModel";
import Gallery from "../components/Homepage/Gallery";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import { Post } from "../types/post";
import { modelList } from "../utils/models";
import Landing from '../components/Homepage/Landing';
import Loader from "../components/Loader";
import Swal from "sweetalert2";

const HomePage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [last, setLast] = useState(false);

  const [loading, setLoading] = useState(false);
  const { loadMoreRef, skip } = useInfiniteScroll();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      if (!last) {
        const response = await fetch(
          `http://localhost:8000/api/v1/post/?since=${skip}`
        );

        if (response.ok) {
          const result = await response.json();
          setPosts(prev => [...prev, ...result.posts]);
          if(result.posts.length<10){
            setLast(true)
          }
        }

        
      }
    } catch (error) {
      Swal.fire({
        title: 'Out of service',
        icon: 'error',
        focusConfirm: false,
        confirmButtonText: 'Ok',
      })
    } finally {
      setLoading(false);
    }
  }, [skip]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <main className="pt-16">
      <Landing/>
      <CarouselModel
        models={modelList}
        handleModel={() => {}}
        removerModel={() => {}}
      />
      <Gallery
        posts={posts}
      />
      <div
        className="min-h-[100px] grid place-content-center m-4"
        ref={loadMoreRef}>
        {loading && <Loader/>}
      </div>
    </main>
  );
};

export default HomePage;
