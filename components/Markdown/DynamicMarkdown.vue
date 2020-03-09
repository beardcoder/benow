<script>
    export default {
        props: ['renderFunc', 'staticRenderFuncs', 'extraComponent'],

        created() {
            /* eslint no-eval: 0 */
            this.templateRender = eval(this.renderFunc);
            this.$options.staticRenderFns = eval(this.staticRenderFuncs);
        },

        render(createElement) {
            return this.templateRender ? this.templateRender() : createElement('div', 'Rendering');
        },
    };
</script>
