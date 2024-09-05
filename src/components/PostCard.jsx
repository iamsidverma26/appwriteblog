import React from 'react'
import appwriteService from '../appwrite/conff'
import {Link} from 'react-router-dom'

function PostCard({$id ,title ,featuredImage}) {

  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full h-60 flex justify-center items-center flex-col bg-slate-200 rounded-xl p-2 overflow-hidden">
            <div className='w-full justify-center mb-2'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl'
                 />
            </div>
            <h2 className='text-xs text-center md:text-lg font-bold'>{title}</h2>
        </div>
    </Link>
)
}

export default PostCard

// import React from 'react'
// import appwriteService from '../appwrite/conff'
// import { Link } from 'react-router-dom'

// function PostCard({ $id, title, featuredImage }) {
//   const imageUrl = featuredImage 
//     ? appwriteService.getFilePreview(featuredImage) 
//     : '../public/vite.svg'; // Replace with a valid default image path if needed

//   return (
//     <Link to={`/post/${$id}`}>
//       <div className="w-full bg-gray-400 rounded-xl p-2 overflow-hidden">
//         <div className='w-full justify-center mb-2'>
//           <img
//             src={imageUrl}
//             alt={title}
//             className='rounded-xl'
//           />
//         </div>
//         <h2 className='text-xs md:text-lg font-bold'>{title}</h2>
//       </div>
//     </Link>
//   )
// }

// export default PostCard
