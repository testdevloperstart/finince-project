import React from 'react'
import Navbar from '../components/Navbar'
import DocumentUploadForm from '../components/DocumentUploadForm'
import EDI from '../components/EDI'
function CreateAccount() {
  return (
    <div className='mt-20'>
      {/* <Navbar/> */}
      
      <DocumentUploadForm/>
      <EDI/>
    </div>
  )
}

export default CreateAccount
