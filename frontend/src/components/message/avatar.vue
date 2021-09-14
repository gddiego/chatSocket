<template>
  <div class="flex items-center space-x-4">
      
         <div class="flex flex-col leading-tight">
            <div class="text-2xl mt-1 flex items-center">
               <span class="text-gray-900 mr-3 font-bold">{{nameAvatar}}</span>
               <span class="text-green-500">
                  <svg width="10" height="10">
                     <circle cx="5" cy="5" r="5" fill="currentColor"></circle>
                  </svg>
               </span>
            </div>
            <span class="text-md text-gray-500 font-medium">{{nameDescription}}</span>
         </div>
      </div>
</template>

<script>
export default {
  name: 'message',
data() {
    return {
      nameAvatar:'Menssagem',
      nameDescription:'Diego Mendes'
    };
}
}

</script>