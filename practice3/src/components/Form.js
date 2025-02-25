import { useState } from "react"
import './First.scss';
const Form=()=>{
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [gender,setGender] = useState('');
    const [about,setAbout] = useState('');
    const [formData, setFormData] = useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormData(prev=>[...prev,{firstName,lastName,gender,about,formData}]);
        setFirstName('');
        setLastName('');
        setGender('');
        setAbout('');
    }

    return(
        <>
            <form className='Form'>
                <p>FirstName : <input type='text' placeholder="Enter first Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/></p>
                <p>LastName : <input type='text' placeholder="Enter last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/></p>
                <p>Gender : <select onClick={e=>setGender(e.target.value)}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                </select>
                </p>
                <p>
                About : <input type='text' placeholder="Tell about yourself" value={about} onChange={(e)=>setAbout(e.target.value)}/>
                </p>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            <ul>
                {
                    formData.map((data,index)=>(
                        
                        <li key={index} className='List'>
                            {console.log(index)}
                            <div>{data.firstName}</div>
                            <div>{data.lastName}</div>
                            <div>{data.gender}</div>
                            <div>{data.about}</div>
                        </li>
                    ))
                }
            </ul>
        </>
    )

}

export default Form;