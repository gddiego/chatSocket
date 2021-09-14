<template>
  <div class="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen ">
   <div class="flex sm:items-center justify-between py-3 border-b-2">
      <avatar />
      <!-- <div class="flex items-center space-x-2"> -->
        <!-- <h2>teste</h2> -->
      <!-- </div> -->
   </div>
   <div id="messages" class="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      
     <message />
   </div>
   <div class="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
      <div class="relative flex">
       <sendVoice />
         <input type="text" placeholder="Escreva sua mensagem" class="w-full focus:outline-none focus:placeholder-purple-400 text-gray-600 placeholder-purple-600 pl-12 bg-purple-200 rounded-full py-3">
         <div class="absolute right-0 items-center inset-y-0 hidden sm:flex">
          <buttonsSend />
         </div>
      </div>
   </div>
</div>
</template>

<script>
import message from '../components/message/message.vue'
import Avatar from './message/avatar.vue'
import buttonsSend from './buttons/buttonsSend.vue'
import sendVoice from './buttons/sendVoice.vue'

export default {
  components: { message, Avatar, buttonsSend, sendVoice },
  name: 'HelloWorld',
  props: {
    msg: String
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
