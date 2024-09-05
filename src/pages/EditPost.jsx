// import React,{useState , useEffect} from 'react'
// import {Container , PostForm} from '../components'
// import appwriteService from '../appwrite/conff'
// import { useNavigate,useParams } from 'react-router-dom'
// function EditPost() {
//     const [post,setPosts] = useState([])
//     const {slug} = useParams()
//     const navigate = useNavigate() 

//     useEffect(()=>{
//         if(slug){
//             appwriteService.getPost(slug).then((post)=>{
//                 if(post){
//                     setPosts(post)
//                 }
//             })
//         }else{
//             navigate('/')
//         }
//     },[slug,navigate])
//   return post? (
//     <div className="py-8">
//         <Container>
//             <PostForm post={post} />
//         </Container>
//     </div>
//   ) : null
// }

// export default EditPost

import React, { useState, useEffect } from 'react';
import { Container, PostForm } from '../components';
import appwriteService from '../appwrite/conff';
import { useNavigate, useParams } from 'react-router-dom';

function EditPost() {
  const [post, setPost] = useState(null); // Initialize as null for a single post
  const [loading, setLoading] = useState(true); // For loading state
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((fetchedPost) => {
        if (fetchedPost) {
          setPost(fetchedPost);
        } else {
          console.error('Post not found');
          navigate('/'); // Redirect if post not found
        }
        setLoading(false);
      }).catch((error) => {
        console.error('Error fetching post:', error);
        setLoading(false);
        navigate('/'); // Redirect on error
      });
    } else {
      navigate('/');
    }
  }, [slug, navigate]);

  if (loading) {
    return <div>Loading...</div>; // Optional: Replace with a spinner or loader component
  }

  return post ? (
    <div className="py-8">
      <Container>
        <PostForm post={post} />
      </Container>
    </div>
  ) : (
    <div>Post not found</div>
  );
}

export default EditPost;
