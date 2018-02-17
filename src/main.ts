import Vue from "vue";
import OkDialog from "./component/okDialog.vue";

const app = new Vue({
    el: "#app",
    data: {
        showModal: false
    },
    components: {
        "ok-dialog": OkDialog,
    },
});
