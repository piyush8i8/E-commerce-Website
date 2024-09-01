import { assets } from "../assets/assets";


let Appdownload=()=>{
    return <div class="p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
    <p class="text-lg font-bold text-center">For Better Experience Download <br class="lg:hidden"/> Craftify App</p>
    <div class="flex mt-4">
        <a href="#" class="mr-4">
            <img src={assets.play_store} alt="Play Store" class="w-32 h-10 object-contain"/>
        </a>
        <a href="#">
            <img src={assets.app_store} alt="App Store" class="w-32 h-10 object-contain"/>
        </a>
    </div>
</div>



}

export default Appdownload;