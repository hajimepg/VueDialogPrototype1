<template>
    <transition name="modal">
        <div class="modal-mask" v-on:click="$emit('close')">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">default header</slot>
                    </div>

                    <div class="modal-body">
                        <slot name="body">default body</slot>
                    </div>

                    <div class="modal-footer">
                        <slot name="footer">default footer</slot>
                        <button class="modal-default-button" v-on:click="$emit('close')">OK</button>
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
    export default class OuterCloseDialog extends Vue {
    }
</script>
