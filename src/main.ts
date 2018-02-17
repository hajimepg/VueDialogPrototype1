import Vue from "vue";

import OkCancelDialog from "./component/okCancelDialog.vue";
import OkDialog from "./component/okDialog.vue";

const app = new Vue({
    el: "#app",
    data: {
        showModal: false,
        showOkCancel: false,
        showOkCancelClosedBy: "",
    },
    components: {
        "ok-dialog": OkDialog,
        "ok-cancel-dialog": OkCancelDialog,
    },
    methods: {
        onOKCancelDialogOpen() {
            this.showOkCancel = true;
            this.showOkCancelClosedBy = "";
        },
        onOkCancelDialogClosedByOk() {
            this.showOkCancel = false;
            this.showOkCancelClosedBy = "OKが押されました";
        },
        onOkCancelDialogClosedByCancel() {
            this.showOkCancel = false;
            this.showOkCancelClosedBy = "Cancelが押されました";
        },
    },
});
