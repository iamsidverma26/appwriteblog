import React, { useState, useEffect } from 'react';
import appwriteService from '../appwrite/conff';
import { Container, PostCard } from '../components';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((response) => {
            if (response) {
                setPosts(response.documents); // Assuming `documents` is the array of posts
            }
        }).catch((error) => {
            console.error('Error fetching posts:', error);
        });
    }, []); // Only run on mount

    return (
        <div className='w-full py-8'>
            <Container>
                <div className="flex flex-wrap">
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard 
                                $id={post.$id} 
                                title={post.title} 
                                featuredImage={post.featuredImage} 
                            />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
