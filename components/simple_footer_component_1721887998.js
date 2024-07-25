/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1721887998", {
    template: `
    <footer id="footer-section" style="height: 910px">
        <div class="flex-1">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Click me
            </button>
        </div>
    </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
