<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">default header</slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body"><p>default body</p></slot>
                        <input type="text" v-model="text">
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">default footer</slot>
                        <button class="modal-default-button" v-on:click="onOkClick">OK</button>
                        <button class="modal-default-button" v-on:click="onCancelClick">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script lang="ts">
    import Vue from "vue";
    import Component from "vue-class-component";

    @Component
    export default class InputTextDialog extends Vue {
        text = "";

        onOkClick() {
            this.$emit("ok", this.text);
        }

        onCancelClick() {
            this.$emit("cancel");
        }
    }
</script>
