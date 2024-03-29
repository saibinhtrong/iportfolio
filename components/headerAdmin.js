const headerAdmin = ()=>{
    return`
    <div class="w-full bg-[#1008ee] py-[10px]" id="backtop">
        <div class="max-w-6xl m-auto flex justify-between items-center py-3">
            <!-- //logo -->
            <div class="">
                <a href="">
                    <!-- <img class="w-[120px]" src="./img/logo-1.png" alt=""> -->
                    <h1 class="text-[#ffff] text-[18px]">DEV <span class="text-[#3f0edf]">Sai Binh Trong</span></h1>
                </a>
            </div>
            <!-- //menu -->
            <div class="">
                <ul class="flex items-center gap-[50px]">
                    <li><a class="text-[16px] text-[#3f0edf] tra font-bold tracking-[1px]" href="/admin/projectListAdmin">Project</a>
                    </li>
                    <li><a class="text-[16px] text-[#ffff] hover:text-[#3f0edf] tra font-bold tracking-[1px]"
                            href="/admin/userListAdmin">Users</a>
                    </li>
                    <li><a id="#contact"
                            class="text-[16px] text-[#ffff] hover:text-[#3f0edf] tra font-bold tracking-[1px]"
                            href="">About</a>
                    </li>
                    <li><a href="/"
                            class="text-[16px] text-[#3f0edf] tra font-bold tracking-[1px] border px-10 py-2 border-[#3f0edf] hover:bg-[#f75023] hover:text-[#ffff] rounded-md">VIEW
                            CLIENT</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    `
}
export default headerAdmin