export default {
  template: `
    <button class= "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center disabled:cursor-not-allowed" :disabled="processing">
        <slot/>
    </button>
    `,

  props: {
    type: {
      type: String,
      default: "primary",
    },
  },

  data() {
    return {
      processing: true,
    };
  },
};
