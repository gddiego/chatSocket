<template>
  <div class="chat-message">
    <div class="flex items-end">
      <img
        src="https://ui-avatars.com/api/?name=VDs"
        class="w-7 md:w-auto h-8 sm:h-7 rounded-full"
      />
      <div
        class="
          flex flex-col
          space-y-2
          text-xs
          max-w-xs
          mx-2
          order-2
          items-start
        "
      >
        <div>
          <span
            class="
              px-4
              py-3
              rounded-lg
              inline-block
              rounded-bl-none
              bg-purple-500
              text-white text-sm
              shadow-md
            "
            >{{ message1 }}</span
          >
        </div>
      </div>
    </div>

    <div class="flex items-end justify-end">
      
       <div class="flex items-end justify-start">
           <div class='flex items-start justify-start'> 
          <img
        src="https://ui-avatars.com/api/?name=DM"
        class="w-7 md:w-auto h-8 sm:h-7 rounded-full"
      />
      
      </div>
      
               </div>
      <div
        class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end"
      >
        <div>
          <span
            class="
              px-4
              py-3
              rounded-lg
              inline-block
              rounded-br-none
              bg-yellow-500
              text-white text-sm
              shadow-md
            "
            >{{ message2 }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "message",
  data() {
    return {
      message1: "olá tudo bem?",
      message2: "olá tudo bem e voce?",
    };
  },
};
</script>

<style>
.circle-avatar {
  font-size: 16px;
}
</style>