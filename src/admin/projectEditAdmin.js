import axios from "axios";
import headerAdmin from "../../components/headerAdmin";
import { router, useEffect, useState } from "../lib"

const projectEditAdmin= ({id})=>{
    const [project, setProject] = useState({});
    useEffect(function(){
        axios.get(`http://localhost:3000/APIproject/${id}`).then(({data})=>setProject(data))
    },[])
    useEffect(function(){
        const formEdit = document.querySelector("#form-edit");
        const nameProject = document.querySelector("#nameProject");
        const date = document.querySelector("#date");
        const language = document.querySelector("#language");
        formEdit.addEventListener("submit", function(e){
            e.preventDefault();
            const formData = {
                name: nameProject.value,
                date: date.value,
                language: language.value,
                // gallery: urls,
            };
            axios.put(`http://localhost:3000/APIproject/${id}`, formData)
            .then(()=> router.navigate("/admin/projectListAdmin"))
            .catch(()=> alert("Không thể edit !"))
        })
    })
    return `
    ${headerAdmin()}
    <div class="max-w-6xl m-auto">
        <form action="" id="form-edit">
            <h1 class="text-center text-[#6623f7] font-bold">EDIT PROJECT</h1>
            <div>
                <label for="" class="block text-[#ffff]">Name Project</label>
                <input id="nameProject" type="text" class="border w-full outline-none p-2" value="${project.name}">
            </div>
            <div class="">
                <label for="" class="block text-[#ffff]">Date</label>
                <input id="date" type=" text" class="border w-full outline-none p-2" value="${project.date}">
            </div>
            <div class="">
                <label for="" class="block text-[#ffff]">Date</label>
                <input id="language" type=" text" class="border w-full outline-none p-2" value="${project.language}">
            </div>
            <div class="">
                <input type="submit"
                    class="cursor-pointer border px-5 py-2 border border-[#23cdf7] hover:bg-[#8b09a8] text-[#35f723] hover:text-[#ffff] uppercase text-[12px] mt-[10px]">
            </div>
        </form>
    </div>
    `
}
export default projectEditAdmin