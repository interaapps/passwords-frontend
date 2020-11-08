<template>
    <div>
        <h1>{{$store.state.user.name?'Welcome, '+$store.state.user.name : 'Loading user... You\'ll be logged in.'}}</h1>
        <h3 v-if="!$route.query.authentication" style="text-align: center;margin-top: 50px; color: #EE4343">Error while logging in.</h3>
    </div>
</template>
<script>
export default {
    mounted(){
        console.log("yra")
        console.log(this.passwordsClient)
        localStorage["session"] = this.$route.query.authentication
        this.passwordsClient.apiClient.options.header["X-Key"] = localStorage["session"]
        this.passwordsClient.fetchAndInsert().then(()=>this.$router.push("/"))
    }
}
</script>
<style lang="scss" scoped>
h1 {
    text-align: center;
    margin-top: 140px;
    display: block;
}
</style>