<template>
    <div class="example">
        <h1 class="example--header">Прирвет! я пример Vue компонента))</h1>
        <p>Если ты хочешь использовать Vue в этом проекте, то ознакомся с <a target="_blank" href="https://ru.vuejs.org/index.html">документацией</a>. </p>
        <p>Ты можешь создавать компоненты внутри <b>"<code>src/framework/components</code>"</b>.</p>
        <p>Затем тебе нужно зарегистрировать компонент в <b>"<code>src/framework/register.js</code>"</b>.</p>
        <p>Если ты все же решишь что Vue не нужен в твоем проекте, то удали строку: <br/><br/>
            <b><code>require("./framework/app");</code></b>
            в <b>"<code>src/main.js</code>"</b>
        </p>
        <p>
            и строку: <br/><br/> <b>"<code>{{"<\example-vue-component><\/example-vue-component>"}}</code>"</b>
            в <b>"<code>/index.php</code>".</b>
            <br/><br/>
            Таким образом я не попаду в итоговую сборку((
        </p>
        <p>Кстати, ты зашел на эту старницу в <b>{{start}}</b> с тех пор прошло <b>{{interval}}</b>.</p>
    </div>
</template>

<script>
const date = new Date();

export default {
    data() {
        return {
            hours: date.getHours(),
            min: date.getMinutes(),
            sec: date.getSeconds(),
            now: new Date()
        };
    },
    computed: {
        start() {
            let { hours, min, sec } = this;
            hours = hours < 10 ? 0 + hours : hours;
            min = min < 10 ? `0${min}` : min;
            sec = sec < 10 ? `0${sec}` : sec;
            return `${hours}:${min}:${sec}`;
        },
        interval() {
            let sec = Math.floor((this.now - date) / 1000),
                min = Math.floor(sec / 60),
                hour = Math.floor(min / 60);
            return `${hour} h ${this.getLast(min)} m ${this.getLast(sec)} c`;
        }
    },
    methods: {
        getLast(total) {
            return total - Math.floor(total / 60) * 60;
        }
    },
    mounted() {
        setInterval(() => { this.now = new Date(); }, 1000);
    }
};
</script>

<style scoped lang="scss">
    .example {
        border: 1px solid #000;
        padding: 10px;

        &--header {
            color: $textColor;
        }
    }
</style>
