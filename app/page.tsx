"use client"

//import BlogCard from '@components/cards/BlogCard'
import {useState, useEffect, useContext} from 'react'
// import PostsContext from '../context/PostContext'
import axios from 'axios'
import Tag from '@/components/cards/Tag'

import Image from 'next/image'

export default function Home() {

  const [posts, setPosts] = useState([{
    title: "How to use React",
    subHeading: "React is a great framework",
    image: "https://picsum.photos/200/300",
    tag: "React",
  }])
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await axios.get('/api/posts')
        setPosts(data.data)
      } catch (error) {
        setError("Error fetching posts")
      }
    }
  }, [])

  if (posts?.length === 0) {
    return <div className='text-center'> No Postes Found ... </div>
  }

  // if (error) {
  //   <div className='text-center text-3xl mt-10'>
  //     <img src="#" alt="error" className='w-96' />
  //   </div>
  // }

  return (
    <main className='min-h-screen p-10 lg:p:20'>
      <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold mb-10 flex flex-col justify-center items-center uppercase tracking-widest h-96'>
        <span className='text-5xl border-b-4 pb-3 font-bold'>
          Fadhel Web Dev Blog
        </span>
        <p className='text-lg mt-10'>
          Like, share and subscribe for more content !
        </p>
      </h2>

      <h2 className='flex flex-wrap mt-10 gap-4'>
        {[
          ...new Set(
            posts?.map((post) => {
              return post.tag;
            })
          ),
        ].map((tag) =>{
          return <Tag key={tag} tag={tag} isSelected={selectedTags.includes(tag)} setSelectedTags={setSelectedTags}/>
        })}
        {
          selectedTags?.length !== 0 &&(
            <button className='bg-red-500 text-white px-4 py-2 rounded-md' onClick={()=> setSelectedTags([])}>Clear</button>
          )
        }
      </h2>
    </main>
  )
}
