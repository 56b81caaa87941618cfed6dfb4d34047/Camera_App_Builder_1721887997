/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1721887998", {
    template: `
    <footer id="footer-section" class="flex-1 bg-white dark:bg-gray-800">
            <div id="footer-container" class="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <hr id="footer-divider" class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-6 mr-3 sm:h-9" alt="Landwind Logo" />
                            PixelPerfect: Crafting Visual Masterpieces
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-gray-500 dark:text-gray-400">
                        Unlock your creativity with PixelPerfect. Our cutting-edge app empowers photographers and videographers to capture stunning visuals effortlessly. Join our community of artists today and elevate your craft to new heights.
                        Unlock your creativity with PixelPerfect. Our cutting-edge app empowers photographers and videographers to capture stunning visuals effortlessly. Join our community of artists today and elevate your craft to new heights.
                    </div>
                </div>
                <div class="flex justify-center mt-4">
                    <button class="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                        Free
                    </button>
                </div>
                </div>
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
