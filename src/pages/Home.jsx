import React,{useState , useEffect} from 'react'
import {Container ,  Logo,  PostCard} from '../components'
import appwriteService from '../appwrite/conff'
function Home() {
    const [posts,setPosts] = useState([])
 
    useEffect(()=>{
        appwriteService.getActivePosts().then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
        })
    },[])


    const [displayedText, setDisplayedText] = useState('');
    const fullText = 'LOGIN TO DIVE IN BLOGS';
      
        useEffect(() => {
          let currentIndex = 0;
      
          const typeWriter = () => {
            if (currentIndex < fullText.length) {
                setDisplayedText(fullText.slice(0, currentIndex));
                currentIndex++;
                setTimeout(typeWriter, 100);
            }
          };
      
          typeWriter();
        }, []);
      

    if(posts.length === 0){
        return(
            <div className='w-full bg-indigo-100'>

            <div className=" hover:text-blue-500 transition-colors duration-300 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold ">
                               {displayedText}
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
            <img  className='w-full' src="https://t4.ftcdn.net/jpg/02/25/06/05/360_F_225060535_aWNsust4XNUqdHrB8H528OSMtrcJ6OSX.jpg" alt="" />
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            {/* <Logo/> */}
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4 h-80'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home