
function blogsImages(state = {}, actions) {
  switch (actions.type) {
      case 'BLOGS_IMAGES': {
        return {...state, ...actions.payload}
      }
      default:
          return state;
  }
}

export default blogsImages;
