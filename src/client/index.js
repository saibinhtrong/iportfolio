import axios from "axios";
import { useEffect, useState } from "../lib"
import contact from "./contact";
const HomePage = ()=>{
    const [project, setProject] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:3000/APIproject").then(({data})=>setProject(data))
    },[])

    return `
    <div class="w-full bg-[#232529] py-[10px] fixed top-0 left-0 z-20">
        <div class="max-w-6xl m-auto flex justify-between items-center py-3">
            <!-- //logo -->
            <div class="">
                <a href="#home">
                    <!-- <img class="w-[120px]" src="./img/logo-1.png" alt=""> -->
                    <h1 class="text-[#ffff]  text-[19px]"><span class="text-[#136a8a]">Sai BinhTrong Portfolio Website</span></h1>
                </a>
            </div>
            <!-- //menu -->
            <div class="">
                <ul class="flex items-center gap-[50px]">
                    <li><a class="text-[16px] text-[#ffff] hover:text-[#00FFFF] font-bold tracking-[1px]" href="#home">Home</a></li>
                    <li><a class="text-[16px] text-[#ffff] hover:text-[#00FFFF] tra font-bold tracking-[1px]"
                            href="#about">About</a>
                    </li>
                    <li><a class="text-[16px] text-[#ffff] hover:text-[#00FFFF] tra font-bold tracking-[1px]"
                            href="#project">Project</a>
                    </li>
                    <li><a id="#contact"
                            class="text-[16px] text-[#ffff] hover:text-[#00FFFF] tra font-bold tracking-[1px]"
                            href="#skill">Skill</a>
                    </li>
                    <li><a id=""
                            class="text-[16px] text-[#ffff] hover:text-[#00FFFF] tra font-bold tracking-[1px]"
                            href="#contact">Contact</a>
                    </li>

                </ul>
            </div>
        </div>
    </div>
    <!-- DETAIL -->
    <div class="w-full bg-[#2b2d33] py-[100px] mt-[70px]" id="home">
        <div class="max-w-6xl m-auto flex justify-between items-center w-full">
            <div class="w-[50%]">
                <div class="text-[40px] text-[#00FFFF] font-bold ">
                    <h3 class="">Xin chào, tôi là</h3>
                </div>
                <div class="text-6xl text-[#ffff]">
                    <h3>Sái Bình Trọng</h3>
                </div>
                <div class="mt-10">
                    <p class="text-[20px] text-[#ffff]">A
                        <span class="text-[#1cbe59]">Front-end Developer</span>
                        <span class="text-[#ffff]">From</span>
                        <span class="text-[#00FFFF]">Việt Nam</span>
                    </p>
                    <div class="text-[#ffff] py-5 text-[20px]">
                        <p>Tôi là lập trình viên tại Việt Nam, tôi rất đam mê và tận tâm với công việc của mình.</p>
                    </div>
                    <div class="flex items-center">
                        <div class="mr-[10px]">
                            <a class="bg-[#00FFFF] text-[#black] hover:text-[white] tra font-bold tracking-[1px] border px-10 py-2 border-[#00FFFF] hover:bg-[#2b2d33] rounded-md inline-block"
                                href="https://drive.google.com/drive/folders/1zD4BNTcMn-_GXyH79oJKOv8JZxDgCio4?usp=share_link"><span>My resume  ></span></a>
                        </div>
                        <div class="">
                            <ul class="flex items-center">
                                <li class="px-3"><a href="#" class="text-[#ffff]"><i
                                            class="fab fa-facebook-f hover:text-[#00FFFF]"></i></a>
                                </li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#00FFFF]"><i
                                            class="fab fa-twitter"></i></a>
                                </li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#00FFFF]"><i
                                            class="fab fa-telegram-plane"></i></a></li>
                                <li class="px-3"><a href="#" class="text-[#ffff] hover:text-[#00FFFF]"><i
                                            class="fab fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-[50%] pl-[150px] relative z-10">
                <img class="w-[80%] rounded-[10px]"
                    src="https://res.cloudinary.com/ds3y6hwmf/image/upload/v1676816464/ACMA/tbnjupds0lb61a0ptb4u.jpg" 
                    alt="">

            </div>
        </div>
    </div>
    <!-- Skill -->
    <div class="w-full bg-[#232529] py-[100px]">
        <div class="max-w-6xl m-auto grid grid-cols-3 gap-4">
            <div class="">
                <div class="flex justify-center relative items-center">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456958/img-portfolio/1_tokc8m.png"
                        alt="" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="absolute w-[45px] text-[#eeee]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                    </svg>

                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">
                    Làm việc chăm chỉ</h2>
                    <p class="text-[#ffff] text-center text-[12px]">
                    Các phương pháp phổ biến nhất để thiết kế trang web hoạt động
                    tốt trên máy tính để bàn là thiết kế đáp ứng và thích ứng.
                    </p>
                </div>
            </div>
            <div class="">
                <div class="flex justify-center items-center relative">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456958/img-portfolio/2_epmzqf.png"
                        alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="absolute w-[45px] text-[#eeee]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
                    </svg>

                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">Hòa đồng</h2>
                    <p class="text-[#ffff] text-center text-[12px]">Các phương pháp phổ biến nhất để thiết kế trang web hoạt động
                    tốt trên máy tính để bàn là thiết kế đáp ứng và thích ứng.
                    </p>
                </div>
            </div>
            <div class="">
                <div class="flex justify-center items-center relative">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/3_urqzxy.png"
                        alt="">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="absolute w-[45px] text-[#eeee]">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                </div>
                <div class="">
                    <h2 class="text-[#ffff] text-center py-5">Tham vọng</h2>
                    <p class="text-[#ffff] text-center text-[12px]">Các phương pháp phổ biến nhất để thiết kế trang web
                    công việc đó
                    tốt trên
                    máy tính để bàn đáp ứng và thích ứng
                    thiết kế.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <!-- ABOUT ME -->
    <div class="w-full bg-[#2b2d33]">
        <div class="max-w-6xl m-auto grid grid-cols-2 gap-4 py-[70px]" id="about">
            <div class="relative">
                <img class="w-[500px] rounded-[500px]" 
                    src="	https://res.cloudinary.com/ds3y6hwmf/image/upload/v1676818375/ECMA/jkvcjg1nqtw59etbinmz.jpg"
                    alt="">
            </div>
            <div class="pt-[100px] relative">
                <h2 class="text-[#00FFFF] text-[30px]">Giới thiệu một chút về bản thân ?</h2>
                <p class="text-[16px] text-[#ffff] leading-[30px] py-5 text-justify">Xin chào! <span
                        class="text-[#1cbe59]">Tôi là một front-end developer</span>.
                        hiện tại một
                        học kỳ 5
                        sinh viên fpt
                        Fpt polytechnic. Tôi là
                        rất đam mê và tâm huyết với ngành học của mình. Trong thời gian ở trường, tôi đã có được những kỹ năng
                        và kiến thức nền tảng về ngôn ngữ lập trình & framework <span class="text-[#00FFFF]">
                        [ Html, Css, Javascript, Tailwind
                        CSS, Bootstrap ]
                    </span>.  Tôi là người có trách nhiệm trong công việc và yêu thích những điều mới mẻ. Cám ơn
                    bạn đã đọc!!
                </p>
                <a class="bg-[#00FFFF] text-[black] hover:text-[white] tra font-bold tracking-[1px] border px-10 py-2 border-[#00FFFF] hover:bg-[#2b2d33] rounded-md inline-block"
                    href="#contact"><span>Contact Me</span></a>
                <div class="absolute top-[100px] right-[-150px]">
                    <img src="https://res.cloudinary.com/freelencer/image/upload/v1676456960/img-portfolio/img-7_k32cbc.png"
                        alt="">
                </div>
            </div>
        </div>
    </div>
    <!-- PROJECT -->
    <div id="project" class="w-full bg-[#232529]">
        <div class="max-w-6xl m-auto py-[50px]">
            <div class="text-center">
                <p class="text-[22px] text-[#00FFFF]">Dự án</p>
                <h4 class="text-[40px] text-[#ffff]">Tác phẩm của Tôi</h4>
            </div>
                <div class="grid grid-cols-3 gap-4 py-[30px]">
                ${project.map(function(item){
                    return `
                    <div class="item">
                    <div class="rounded-xl overflow-hidden">
                        <a href="">
                            <img class="hover:scale-110 transition w-full rounded-md"
                                src="${item.gallery}"
                                alt="">
                        </a>
                    </div>
                    <div class="py-3">
                        <a href="">
                            <h2 class="text-[#ffff]">${item.name}</h2>
                        </a>
                        <div class="flex items-center py-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-[14px] text-[#00FFFF]">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                            <span class="text-[#ffff] text-[10px] pl-[10px] pt-[2px]">${item.date}</span>
                        </div>
                        <ul class="">
                            <li class="">
                                <a class="px-2 py-[1px] hover:bg-[#00FFFF] border border-[#00FFFF] rounded-md text-[#ffff] text-[12px]"
                                    href="">${item.language}</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href=""
                            class="text-[10px] text-[#ffff] font-bold tracking-[1px] border px-10 py-2 border-[#00FFFF] hover:bg-[#00FFFF] hover:text-[#ffff] rounded-md">View
                            source code git </a>
                    </div>
                </div>
                    `
                }).join("")}
                </div>
            </div>
        </div>
    </div>
    <!-- SKILL -->
    <div class="bg-[#2b2d33] w-full" style="border-bottom: 1px solid #f8f8ff">
        <div class="max-w-6xl m-auto pt-[50px] pb-[100px]" id="skill">
            <div class="">
                <h3 class="text-center text-[40px] text-[#ffff]"> KĨ NĂNG CỦA TÔI</h3>
                <p class="text-center text-[#00FFFF] pb-[80px] text-[22px]">Tôi phát triển các kỹ năng thường xuyên để giữ tôi
                Cập nhật</p>
                <div class="grid grid-cols-4 gap-4">
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632402/duanECMA_portforlio/download_dchfop.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">HTML</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632402/duanECMA_portforlio/download_1_gtp8qq.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">CSS</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676634692/duanECMA_portforlio/download_2_n57xgv.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">JAVACRIPT</span>
                            </div>
                        </div>
                    </div>
                   
                    <div class="flex justify-center">
                        <div class="">
                            <div class="bg-[#232529] w-[150px] p-10 rounded-[50%] hover:scale-110"
                                style="transition: all 0.5s ease-in-out">
                                <img class=" w-[150px]" src="https://res.cloudinary.com/dwzh9i6xf/image/upload/v1676632402/duanECMA_portforlio/bootstrap.4bdf973467a3db0c433f_aslzwl.png" alt="">
                            </div>
                            <div class="flex justify-center">
                                <span class="text-[#ffff] text-[24px] pt-5">BOOTSTRAP</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
    <!-- CONTACT -->
    ${contact()}
    <!-- MAP -->

    <!-- FOOTER -->
    <div class="bg-[#232529]" style="border-top: 1px solid #ffff">
        
    </div>
    `
}
export default HomePage