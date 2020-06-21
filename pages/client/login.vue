<template>
    <div>
        <section class="max-w-md mx-auto p-8 mt-40">
            <form>
                <div>
                    <label class="mb-2 text-80 block">What’s Your Email Address?</label>
                    <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="email" ref="email" v-model="email" name="email" v-validate="'required|email'" placeholder="alex@doe.com"/>                    
                    <div class="mt-2" v-if="errors.first('email')">
                        <span class="text-80 py-2 px-4 bg-red-600 text-white">{{ errors.first('email') }}</span>
                    </div>
                </div>
                
                <div>
                    <button class="mt-4 bg-green-600 hover:bg-green-800 text-white text-80 font-bold py-2 px-4 rounded" native-type="submit" @click.prevent="validateEmail" :disabled="isLoading">Submit</button>
                </div>   
            </form> 
        </section>
    </div>
</template>
<script>
export default {
    layout: 'skeleton',
    data: function () {
      return {
        email: '',
        isLoading: false,
      };
    },
    methods: {
        async validateEmail(){
            this.$validator.validate('email').then((result) => {                  
            if (result) {
                this.login()
            }
        })
        },
        async login(){
            this.$toast.error('Email address not found. Do you have a client account already?')
            // this.isLoading = true         
            // try {            
            //     await this.$axios.post('/user/setEmail', {
            //         email: this.email,
            //         name: this.firstName
            //     }).then((result) => {
            //         this.isLoading = false 
            //         if(result.data && result.data.success){
            //         if(result.data.user){
            //             this.user_id = result.data.user.id
            //             this.step = 3 //skip the username selection
            //             this.$refs.roomname.focus()
            //         }else{
            //             this.user_id = result.data.user_id
            //             this.step = 2
            //             this.$refs.username.focus()
            //         }
            //         }      
            //     })
            // } catch (e) {          
            
            // }        
      },
    }
}
</script>