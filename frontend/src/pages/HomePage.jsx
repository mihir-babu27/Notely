import React, { useEffect } from 'react'
import Navbar from '../components/Navbar.jsx'
import RateLimitedUI from '../components/RateLimitedUI.jsx'
import NoteCard from '../components/NoteCard.jsx'
import NotesNotFound from '../components/NotesNotFound.jsx'
import { useState } from 'react'
import api  from '../lib/axios.js'
import toast from 'react-hot-toast'

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes');
        console.log(res.data);
        setNotes(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.error('Error fetching notes:');
        if (error.response && error.response.status === 429) {
          setIsRateLimited(true);
        }
        else {
          toast.error("Failed to fetch notes, Please try later")
        }
      } finally {
        setLoading(false);
      }
    }
  fetchNotes();
}, []);

  return (
    <div className='min-h-screen'>
      <Navbar />
      {isRateLimited && <RateLimitedUI />}

      <div className='max-w-7xl mx-auto p-4 mt-6'>
      {loading && <div className='text-center text-primary py-10'>Loading Notes...</div>}

      {notes.length === 0 && !isRateLimited && <NotesNotFound /> }

      {notes.length > 0 && !isRateLimited && (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note) => (
            <NoteCard key={note._id} note={note} setNotes={setNotes} />
          ))}
        </div>
      )}
      </div>
    </div>
  )
}

export default HomePage