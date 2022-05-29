import { Formik,Form, Field, ErrorMessage } from 'formik'
import React from 'react'
import BasicDetails from './BasicDetails'
import Targetting from './Targetting'


export default function JobForm() {
  return (
    <div>
      <BasicDetails />
      <Targetting />
    </div>
  )
}
