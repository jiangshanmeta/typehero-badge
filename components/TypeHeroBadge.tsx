import { useState } from "react"
import TypeHeroBadgeForm, { TypeHeroBadgeFormData } from "./TypeHeroBadgeForm"
import TypeHeroBadgeResult from "./TypeHeroBadgeResult"

const TypeHeroBadge = ()=>{
    const [formData,setFormData] = useState<TypeHeroBadgeFormData>({
        username:"",
        label:"",
        displayValue:"",
        style:""
    })

    return (
        <>
            <TypeHeroBadgeForm submitFormData={setFormData}/>
            <TypeHeroBadgeResult formData={formData} />
        </>
    )
}

export default TypeHeroBadge