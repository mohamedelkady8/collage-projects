import React from 'react'

function Page404 ( props ) {
  props.navShow( false );
  return (
    <div>
      <h2 className=' bg-danger bg-opacity-25 text-danger text-center py-3'>404 Not Found</h2>
    </div>
  )
}

export default Page404
