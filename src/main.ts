import Vue from "vue";

import DynamicOkDialog from "./component/dynamicOkDialog.vue";
import InputTextDialog from "./component/inputTextDialog.vue";
import OkCancelDialog from "./component/okCancelDialog.vue";
import OkDialog from "./component/okDialog.vue";
import OuterCloseDialog from "./component/outerCloseDialog.vue";

const app = new Vue({
    el: "#app",
    data: {
        showModal: false,
        showOkCancel: false,
        showOkCancelClosedBy: "",
        showInputText: false,
        inputText: "",
        showOuterCloseDialog: false,
    },
    components: {
        "ok-dialog": OkDialog,
        "ok-cancel-dialog": OkCancelDialog,
        "input-text-dialog": InputTextDialog,
        "outer-close-dialog": OuterCloseDialog,
        "dynamic-ok-dialog": DynamicOkDialog,
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
        onInputTextDialogOpen() {
            this.showInputText = true;
        },
        onInputTextDialogClosedByOk(text: string) {
            this.showInputText = false;
            this.inputText = text;
        },
        onInputTextDialogClosedCancel() {
            this.showInputText = false;
        },
        showDynamicDialog() {
            const dialog = new DynamicOkDialog().$mount();
            dialog.$on("close", () => {
                dialog.$destroy();
            });
            this.$el.appendChild(dialog.$el);
        },
    },
});
