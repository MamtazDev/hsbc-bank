

import { createContext, useState } from "react";

export const FormContext = createContext();
const FormContextProvider = ({children})=>{
  const [formData, setFormData] = useState({});
  const FormDataValue = {formData,setFormData}
  return <FormContext.Provider  value={FormDataValue}>{children}</FormContext.Provider>
}
export default FormContextProvider;