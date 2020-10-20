<template>
    <form @submit.prevent="submitForm()">
        <div class="row q-mb-md">
            <q-banner class="bg-grey-3">
            <template v-slot:avatar>
                <q-icon name="account_circle" color="primary" />
            </template>
            {{tab | titleCase}} to access your todo anywhere
            
            </q-banner>
        </div>

    <div class="row q-mb-md">
        <q-input outlined v-model="formData.email"
            ref="email"
            type="email"
            :rules="[ val => isValidEmail(val)|| 'Please enter valid email address']"
            lazy-rules
            label="Email" />
    </div>
    
    <div class="row q-mb-md">
        <q-input outlined v-model="formData.password"
            ref="password"
            type="password"
            :rules="[ val => val.length >= 6 || 'Please use minimum 6 characters']"
            lazy-rules=""
         label="Password" />
    </div>
    <q-btn color="primary" 
        type="submit"
    :label="tab|titleCase" />
    </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    props:['tab'],
    data()
    {
        return{
            formData:{  
                email:'',
                password:''
            }
        }
    },
    methods:{
        
        ...mapActions('auth',["RegisterUser","loginUser"]),
        isValidEmail(email)
        {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        },
        submitForm()
        {
            this.$refs.email.validate()
            this.$refs.password.validate()

            if(!this.$refs.email.hasErrors && !this.$refs.password.hasErrors)
            {
                if(this.tab == "login")
                {
                    this.loginUser(this.formData);
                }
                else{
                    this.RegisterUser(this.formData)
                }
            }
        },
        
    },
    filters:{
        titleCase(value)
        {
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<style scoped>

</style>