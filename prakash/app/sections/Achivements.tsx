import React from 'react'
import { Music,Disk } from '@/public/export'
import Achivementscard from '../components/Achivementscard'

function Achivements() {
  return (
    <div className='w-full flex justify-center pt-4 items-center flex-col gap-y-4'>
      <span className='text-white  whitespace-nowrap text-4xl'>TOP PICS</span>
      <div className='grid grid-cols-1 gap-y-3 sm:gap-x-4 sm:grid-cols-2'>
              <Achivementscard Disk={Disk} counts={'97B+'} Music={Music} subtitle='#1worldwide' title='Prayam Nammil...' />
      <Achivementscard Disk={Disk} counts={'97B+'} Music={Music} subtitle='#1worldwide' title='Prayam Nammil...' />
      <Achivementscard Disk={Disk} counts={'97B+'} Music={Music} subtitle='#1worldwide' title='Prayam Nammil...' />
      <Achivementscard Disk={Disk} counts={'97B+'} Music={Music} subtitle='#1worldwide' title='Prayam Nammil...' />
      </div>
    </div>
  )
}

export default Achivements
