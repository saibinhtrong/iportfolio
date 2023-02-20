import axios from "axios";
import { router, useEffect } from "../lib";

const contact = ()=>{
    useEffect(()=>{
        const form = document.querySelector("#form");
        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const subject = document.querySelector("#subject");
        const note = document.querySelector("#note");
        form.addEventListener("submit", function(e){
            e.preventDefault();
            const newUser = {
                name: name.value,
                email: email.value,
                phone: phone.value,
                subject: subject.value,
                note: note.value,
            }
            axios.post("http://localhost:3000/APIproject", newUser)
            .then(()=> alert("Submit successfully !"))
            .catch(()=> alert ("Submit to fail !"))
        })
    })
    return `
    <div class="w-full bg-[#2b2d33]">
        <div class="max-w-6xl m-auto py-[50px] relative" id="contact">
            <div class="pb-[100px]">
                <div class="text-center">
                    <p class="text-[42px] text-[cyan]">Contact me</p>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div class="">
                    <div class="flex items-center">
                        <div class="bg-[cyan] p-[40px] rounded-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-[#ffff] w-[50px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                        </div>
                        <div class="pl-[20px]">
                            <h4 class="text-[#ffff] text-[32px]">Address</h4>
                            <span class="text-[cyan] text-[16px]">VietNam</span>
                        </div>
                    </div>
                    <div class="flex items-center my-[30px]">
                        <div class="bg-[cyan] p-[40px] rounded-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-[#ffff] w-[50px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        <div class="pl-[20px]">
                            <h4 class="text-[#ffff] text-[32px]">Email</h4>
                            <span class="text-[cyan] text-[16px]">trongsbph21504@fpt.edu.vn</span>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <div class="bg-[cyan] p-[40px] rounded-[50%]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="text-[#ffff] w-[50px]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                        </div>
                        <div class="pl-[20px]">
                            <h4 class="text-[#ffff] text-[32px]">Phone</h4>
                            <span class="text-[cyan] text-[16px]">+84 0354945543</span>
                        </div>
                    </div>
                </div>
                <div class="">
                    <form action="" id="form">
                        <div class="grid grid-cols-2 gap-5">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[cyan] rounded-md py-3 px-7 outline-none "
                                placeholder="Your name" id="name">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[cyan] rounded-md py-3 px-7 outline-none "
                                placeholder="Your email" id="email">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[cyan] rounded-md py-3 px-7 outline-none "
                                placeholder="Your phone" id="phone">
                            <input type="text"
                                class="text-[#ffff] bg-transparent border border-[cyan] rounded-md py-3 px-7 outline-none "
                                placeholder="Subject" id="subject">
                        </div>
                        <div class="">
                            <textarea
                                class="w-full text-[#ffff] bg-transparent border border-[cyan] rounded-md py-3 px-7 outline-none mt-[16px]"
                                name="" id="note" cols="30" rows="10" placeholder="Write your message here" id="note"></textarea>
                        </div>
                        <input type="submit" class=" bg-[cyan] text-[16px] text-[black] tra font-bold tracking-[1px] border px-10 py-2 hover:bg-[black] hover:text-[#ffff] rounded-md mt-[10px]">
                    </form>
                </div>
            </div>
            <div class="absolute right-0 bottom-[30px]">
                <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456957/img-portfolio/img-13_fssqox.png"
                    alt="">
            </div>
            <div class="absolute left-0 top-[30px]">
                <img src=""
                    alt="">
            </div>
        </div>
    </div>
    `
}
export default contact;