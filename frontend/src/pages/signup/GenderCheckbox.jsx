import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex ' >
        <div className='form-control mt-2' >
            <label className={'label gap-2 cursor-pointer'} >
                <span className='label-text' >Male</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>

        </div>
        <div className='form-control mt-2' >
            <label className={'label gap-2 cursor-pointer'} >
                <span className='label-text' >Female</span>
                <input type='checkbox' className='checkbox border-slate-900' />
            </label>

        </div>
    </div>
  )
}

export default GenderCheckbox

//starter code here 
// import React from 'react'

// const GenderCheckbox = () => {
//   return (
//     <div className='flex ' >
//         <div className='form-control mt-2' >
//             <label className={'label gap-2 cursor-pointer'} >
//                 <span className='label-text' >Male</span>
//                 <input type='checkbox' className='checkbox border-slate-900' />
//             </label>

//         </div>
//         <div className='form-control mt-2' >
//             <label className={'label gap-2 cursor-pointer'} >
//                 <span className='label-text' >Female</span>
//                 <input type='checkbox' className='checkbox border-slate-900' />
//             </label>

//         </div>
//     </div>
//   )
// }

// export default GenderCheckbox